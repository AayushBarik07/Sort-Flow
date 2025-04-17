import React from 'react'
import { useState } from 'react'
import './InsertionSort.css'
export const insertionSort = async (speed, stopRef) => {

  if(stopRef.current) return; // It means the user has clicked the stop button
  // Reset colors before starting
  // for (let i = 0; i < bars.length; i++) {
  //   bars[i].style.backgroundColor = 'turquoise';
  // }

  const bars = document.getElementsByClassName('array-bar');

  for (let i = 1; i < bars.length; i++) {
    let j = i;
    let currentHeight = parseInt(bars[i].style.height);

    bars[i].style.backgroundColor = 'red'; // Highlight current bar

    await delay(speed);

    while (j > 0 && parseInt(bars[j - 1].style.height) > currentHeight) {
      bars[j].style.backgroundColor = 'red';
      bars[j - 1].style.backgroundColor = 'red';

      await delay(speed);

      // Swap bars[j] and bars[j-1]
      bars[j].style.height = bars[j - 1].style.height;

      bars[j - 1].style.backgroundColor = 'turquoise';
      bars[j].style.backgroundColor = 'turquoise';

      j--;
    }

    bars[j].style.height = `${currentHeight}px`;
    bars[i].style.backgroundColor = 'turquoise';
  }

  // Optional: mark all bars sorted
  for (let k = 0; k < bars.length; k++) {
    bars[k].style.backgroundColor = 'green';
    await delay(10);
  }
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
