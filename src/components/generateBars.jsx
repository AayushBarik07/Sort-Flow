// generateBars.jsx
import React from 'react';
import './generateBars.css';

const GenerateBars = ({ array }) => {
  return (
    <div className='array-container'>
      {array.map((value, index) => (
        <div
          className='array-bar'
          key={index}
          style={{ height: `${value}px` }}
        ></div>
      ))}
    </div>
  );
};

export default GenerateBars;



