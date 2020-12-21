import React from 'react';
import './Header.css';

const Header = ({ randomizeBars, bubbleSort, mergeSort, quickSort }) => {
  return (
    <div className="container-menu">
      <div className="menu-option">
        <a onClick={ randomizeBars }>Create Random Array</a>
      </div>
      
      <div className="sort-options">
        <div className="menu-option">
          <a onClick={ bubbleSort }>Bubble Sort</a>
        </div>
        <div className="menu-option">
          <a onClick={ mergeSort }>Merge Sort</a>
        </div>
        <div className="menu-option">
          <a onClick={ quickSort }>Quick Sort</a>
        </div>
      </div>
    </div>
  )
} 

export default Header