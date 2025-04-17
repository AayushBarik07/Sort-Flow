import React from 'react'
import { useState } from 'react'
import './BubbleSort.css'
export const bubbleSort = async (speed, stopRef) => {
  const bars = document.getElementsByClassName('array-bar');

  if(stopRef.current) return; // It means the user has clicked the stop button
  // Reset colors before starting
  // for (let i = 0; i < bars.length; i++) {
  //   bars[i].style.backgroundColor = 'turquoise';
  // }

  for (let i = 0; i < bars.length - 1; i++) {
    for (let j = 0; j < bars.length - i - 1; j++) {
      const barOne = bars[j];
      const barTwo = bars[j + 1];
      
      barOne.style.backgroundColor = 'red';
      barTwo.style.backgroundColor = 'red';

      await delay(speed);

      const height1 = parseInt(barOne.style.height);
      const height2 = parseInt(barTwo.style.height);

      if (height1 > height2) {
        barOne.style.height = `${height2}px`;
        barTwo.style.height = `${height1}px`;
      }

      barOne.style.backgroundColor = 'turquoise';
      barTwo.style.backgroundColor = 'turquoise';
    }

    bars[bars.length - i - 1].style.backgroundColor = 'green';
  }

  bars[0].style.backgroundColor = 'green';
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

