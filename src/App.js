import React, { useState } from 'react';
import './App.css';

import { bubbleSort } from './sortingAlgorithms/bubbleSort.js'
import { mergeSort } from './sortingAlgorithms/mergeSort.js'
import { quickSort } from './sortingAlgorithms/quickSort.js'

import Header from './components/Header/Header.js'
import Visualizer from './components/Visualizer/Visualizer.js'

function App() {
  const [bars, setBars] = useState(randomizeBars())
  
  const resetBars = () => {
    setBars(randomizeBars())
  }
  
  return (
    <div className="App">
      <Header 
        randomizeBars={ resetBars } 
        bubbleSort={ () => bubbleSort(bars, setBars) }
        mergeSort={ () => mergeSort(bars, setBars) }
        quickSort={ () => quickSort(bars, setBars) }/>
      <Visualizer bars={ bars }/>
    </div>
  );
}

export default App;

const randomizeBars = () => {
  const newBars = []
  for (let i = 0; i < 100; i++) {
    newBars.push(randomNumber(1, 500))
  }
  return newBars
}

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}