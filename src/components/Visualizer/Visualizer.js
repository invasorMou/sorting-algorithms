import React from 'react';
import './Visualizer.css';

const Visualizer = ({ bars }) => {
  return (
    <div className="container-bar">
      { 
        bars.map( (value, idx) => (
          <span 
            className="sortable-bar" 
            style={{height:value + 'px'}} 
            key={ idx }
            >
          </span>
        )) 
      }
    </div>
  )
} 

export default Visualizer