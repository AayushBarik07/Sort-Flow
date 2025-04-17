export const quickSort = async (speed, stopRef) => {

  if(stopRef.current) return; // It means the user has clicked the stop button
  // Reset colors before starting
  // for (let i = 0; i < bars.length; i++) {
  //   bars[i].style.backgroundColor = 'turquoise';
  // }

  const bars = document.getElementsByClassName('array-bar');
  await quickSortHelper(bars, 0, bars.length - 1, speed);

  // Mark sorted
  for (let i = 0; i < bars.length; i++) {
    bars[i].style.backgroundColor = 'green';
    await delay(10);
  }
};

async function quickSortHelper(bars, low, high, speed) {
  if (low < high) {
    const pivotIndex = await partition(bars, low, high, speed);
    await quickSortHelper(bars, low, pivotIndex - 1, speed);
    await quickSortHelper(bars, pivotIndex + 1, high, speed);
  }
}

async function partition(bars, low, high, speed) {
  let pivot = parseInt(bars[high].style.height);
  bars[high].style.backgroundColor = 'orange'; // Highlight pivot
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    bars[j].style.backgroundColor = 'red'; // Comparing
    await delay(speed);

    if (parseInt(bars[j].style.height) < pivot) {
      i++;
      await swap(bars, i, j);
    }

    bars[j].style.backgroundColor = 'turquoise'; // Reset color
  }

  await swap(bars, i + 1, high);
  bars[high].style.backgroundColor = 'turquoise';
  return i + 1;
}

async function swap(bars, i, j) {
  const temp = bars[i].style.height;
  bars[i].style.height = bars[j].style.height;
  bars[j].style.height = temp;
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
