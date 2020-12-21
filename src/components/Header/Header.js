import React from 'react';
import './Header.css';

const Header = ({ randomizeBars, bubbleSort, mergeSort, quickSort }) => {
  return (
    <div className="container-menu">
      <div className="menu-option">
        <div onClick={ randomizeBars }>Create Random Array</div>
      </div>
      
      <div className="sort-options">
        <div className="menu-option">
          <div onClick={ bubbleSort }>Bubble Sort</div>
        </div>
        <div className="menu-option">
          <div onClick={ mergeSort }>Merge Sort</div>
        </div>
        <div className="menu-option">
          <div onClick={ quickSort }>Quick Sort</div>
        </div>
      </div>
    </div>
  )
} 

export default Header