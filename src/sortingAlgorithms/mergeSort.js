export function mergeSort(bars, setBars) {
  const barsUnsorted = [...bars]
  const auxBarsUnsorted = barsUnsorted.slice()
  const barsNodes = document.querySelectorAll('.sortable-bar')
  
  let step = 0
  const animations = []
  let animationInterval
  
  splitAndSort(0, barsUnsorted.length - 1, barsUnsorted, auxBarsUnsorted)
  
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
  
  function splitAndSort(startIdx, endIdx, barsUnsorted, auxBarsUnsorted) {
    if (startIdx === endIdx) {
      return
    } else {
      const middleIdx = Math.floor((startIdx + endIdx) / 2)
      splitAndSort(startIdx, middleIdx, auxBarsUnsorted, barsUnsorted)
      splitAndSort(middleIdx + 1, endIdx, auxBarsUnsorted, barsUnsorted)
      merge(startIdx, middleIdx, endIdx, barsUnsorted, auxBarsUnsorted)
    }
  }
  
  function merge(startIdx, middleIdx, endIdx, barsUnsorted, auxBarsUnsorted) {
    let m = startIdx
    let o = startIdx
    let n = middleIdx + 1;
    
    while (o <= middleIdx && n <= endIdx) {
      let animation = { step: step++, bars: [o, n], values: [auxBarsUnsorted[o], auxBarsUnsorted[n]], swap: false }
      animations.push(animation)
      
      if (auxBarsUnsorted[o] <= auxBarsUnsorted[n]) {
        let animation = { step: step++, bars: [m, n], values: [auxBarsUnsorted[o], auxBarsUnsorted[n]], swap: true }
        animations.push(animation)
        barsUnsorted[m] = auxBarsUnsorted[o]
        m++
        o++
      } else {
        let animation = { step: step++, bars: [m, n], values: [auxBarsUnsorted[n], auxBarsUnsorted[n]], swap: true }
        animations.push(animation)
        barsUnsorted[m] = auxBarsUnsorted[n]
        m++
        n++
      }
    }
    while (n <= endIdx) {
      let animation = { step: step++, bars: [n, n], values: [auxBarsUnsorted[o], auxBarsUnsorted[n]], swap: false }
      animations.push(animation)
      animation = { step: step++, bars: [m, m], values: [auxBarsUnsorted[n], auxBarsUnsorted[n]], swap: true }
      animations.push(animation)
      barsUnsorted[m++] = auxBarsUnsorted[n++]
    }
    while (o <= middleIdx) {
      let animation = { step: step++, bars: [o, o], values: [auxBarsUnsorted[o], auxBarsUnsorted[n]], swap: false }
      animations.push(animation)
      animation = { step: step++, bars: [m, m], values: [auxBarsUnsorted[o], auxBarsUnsorted[o]], swap: true }
      animations.push(animation)
      barsUnsorted[m++] = auxBarsUnsorted[o++]
    }
  }
}