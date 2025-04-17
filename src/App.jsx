// App.jsx (or wherever your main component is)
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import GenerateBars from './components/generateBars';

function App() {
  const [array, setArray] = useState([]);

  const resetArray = () => {
    const newArray = Array.from({ length: 80 }, () =>
      randomIntFromInterval(5, 500)
    );
    setArray(newArray);
  };

  return (
    <div>
      <Navbar resetArray={resetArray} />
      <GenerateBars array={array} />
    </div>
  );
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default App;
