export function quickSort(bars, setBars) {
  let barsUnsorted = [...bars]
  const barsNodes = document.querySelectorAll('.sortable-bar')

  let step = 0
  const animations = []
  let animationInterval
  
  barsUnsorted = quickSort(barsUnsorted, 0, barsUnsorted.length - 1)
  
  let i = 0
  if (animations.length > 1) {
    animationInterval = setInterval(()=>{ animateSorting(i) }, 30)
  }
  function animateSorting() {
    if (i > 0) {
      cleanPrevBars(i - 1)
    }
    let bar1 = animations[i].bars[0]
    let bar2 = animations[i].bars[1]
    let val1 = animations[i].values[0]
    let val2 = animations[i].values[1]
    let swap = animations[i].swap
  
    barsNodes[bar1].style.backgroundColor = 'red'
    barsNodes[bar2].style.backgroundColor = 'blue'
  
    if (swap) {
      barsNodes[bar1].style.height = val1 + 'px'
      barsNodes[bar2].style.height = val2 + 'px'
    }
    
    if (i === animations.length - 1) {
      cleanPrevBars(i)
      setBars(barsUnsorted)
      clearInterval(animationInterval)
    } else if (i < animations.length - 1) {
      i++
    }
  }
  
  function cleanPrevBars(i) {
    let bar1 = animations[i].bars[0]
    let bar2 = animations[i].bars[1]
    
    barsNodes[bar1].style.backgroundColor = 'silver'
    barsNodes[bar2].style.backgroundColor = 'silver'
  }
  
  function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
      index = partition(items, left, right);
      if (left < index - 1) {
        quickSort(items, left, index - 1);
      }
      if (index < right) {
        quickSort(items, index, right);
      }
    }
    return items;
  }
  
  function partition(items, left, right) {
    let half = Math.floor((right + left) / 2)
    let pivot = items[half]
    let i = left
    let j = right;
    while (i <= j) {
      while (items[i] < pivot) {
        let animation = { step: step++, bars: [i, j], values: [items[i], items[j]], swap: false}
        animations.push(animation)
        i++;
      }
      let animation = { step: step++, bars: [i, j], values: [items[i], items[j]], swap: false}
      animations.push(animation)
      
      while (items[j] > pivot) {
        let animation = { step: step++, bars: [i, j], values: [items[i], items[j]], swap: false}
        animations.push(animation)
        j--;
      }
      animation = { step: step++, bars: [i, j], values: [items[i], items[j]], swap: false}
      animations.push(animation)
      if (i <= j) {
        swap(items, i, j);
        i++;
        j--;
      }
    }
    return i;
  }
  
  function swap(items, leftIndex, rightIndex){
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
    let animation = { step: step++, bars: [leftIndex, rightIndex], values: [items[leftIndex], items[rightIndex]], swap: true }
    animations.push(animation)
  }
}