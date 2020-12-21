export function bubbleSort(bars, setBars) {
  const barsUnsorted = [...bars]
  let iterations = barsUnsorted.length
  const barsNodes = document.querySelectorAll('.sortable-bar')
  let i = 0
  
  let step = 0
  const animations = []
  let animationInterval
  
  if (iterations > 1) {
    compareBars(i); 
  }
  i = 0
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
      barsNodes[bar1].style.height = val2 + 'px'
      barsNodes[bar2].style.height = val1 + 'px'
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
  
  function compareBars(i) { 
    if (i > 0) {
      sortBars(i)
    } 
    i++
    if (iterations === 0) {
    } else if (i < iterations) {
      compareBars(i)
    } else {
      i = 0;
      iterations--
      compareBars(i)
    }
  }
  
  function sortBars(i) {
    let actual = barsUnsorted[i]
    let prev = barsUnsorted[i - 1]
    
    let animation = { step: step++, bars: [i, i - 1], values: [actual, prev], swap: false }
    
    if (prev > actual) {
      barsUnsorted[i] = prev
      barsUnsorted[i - 1] = actual
      animation.swap = true
    }
    animations.push(animation)
  }
}

