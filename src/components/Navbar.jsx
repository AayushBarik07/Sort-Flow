import React, { useState, useRef } from 'react';
import { bubbleSort } from '../algorithms/bubbleSort/BubbleSort';
import { insertionSort } from '../algorithms/insertionSort/InsertionSort';
import { mergeSort } from '../algorithms/mergeSort/MergeSort';
import { quickSort } from '../algorithms/quickSort/QuickSort';
const Navbar = ({ resetArray }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAlgo, setSelectedAlgo] = useState('');
  const [speed, setSpeed] = useState(100); 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleAlgoSelect = (algo) => {
    setSelectedAlgo(algo);
    setIsOpen(false);
  };

  const stopRef = useRef(false); // Ref to track if the sorting is stopped

  const handleStop = () => {
    stopRef.current = true; // Set the ref to true when stop button is clicked
    alert('Sorting stopped!'); // Show an alert or any other indication
  }
  const handleSpeedChange = (e) => {
    setSpeed(Number(e.target.value));
  };

  const handleStart = () => {
    switch (selectedAlgo) {
      case 'Bubble Sort':
        bubbleSort(speed, stopRef);
        break;
      case 'Insertion Sort':
        insertionSort(speed, stopRef);
        break;
      case 'Merge Sort':
        mergeSort(speed, stopRef);
        break;
      case 'Quick Sort':
        quickSort(speed, stopRef);
        break;
      default:
        alert('Please select an algorithm to start sorting!');
    }
  };

  return (
    <nav>
      <div className='mt-10 p-5 w-270 flex justify-evenly items-center rounded-full bg-gray-800 text-white shadow-lg'>
        <button className='me-5' id='generate' onClick={resetArray}>Generate Bars</button>
        <button id='start' className='me-5' onClick={handleStart}>Start</button>
        <button id='stop' className='me-5' onClick={handleStop}>Stop</button>

        <div className='flex items-center gap-2'>
          <label htmlFor='speedRange' className='text-lg'>Speed : </label>
          <input id='speedRange' type='range' min='10' max='1000' step='10' value={speed} onChange={handleSpeedChange} className='w-32' />
          <span>{speed} ms</span>
        </div>


        <div className="relative inline-block text-left">
          <button id="dropdownDefaultButton" onClick={toggleDropdown} className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">
            Algorithms
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1 L5 5 L9 1"/>
            </svg>
          </button>

          {isOpen && (
            <div id="dropdown" className="absolute mt-2 z-10 w-45 bg-white rounded-lg shadow dark:bg-gray-800 p-5">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <button onClick={() => handleAlgoSelect('Insertion Sort')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white mb-2 w-35">
                    Insertion Sort
                  </button>
                </li>
                <li>
                  <button onClick={() => handleAlgoSelect('Bubble Sort')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white mb-2 w-35">
                    Bubble Sort
                  </button>
                </li>
                <li>
                  <button onClick={() => handleAlgoSelect('Merge Sort')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white mb-2 w-35">
                    Merge Sort
                  </button>
                </li>
                <li>
                  <button onClick={() => handleAlgoSelect('Quick Sort')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white mb-2 w-35">
                    Quick Sort
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div id='choiceAlgo' className='m-5'>
        <p className='text-3xl'>
          {selectedAlgo ? `Selected Algorithm: ${selectedAlgo}` : 'Choose an algorithm to visualize the sorting process...'}
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
