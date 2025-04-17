export const mergeSort = async (speed, stopRef) => {

  if(stopRef.current) return; // It means the user has clicked the stop button
  // Reset colors before starting
  // for (let i = 0; i < bars.length; i++) {
  //   bars[i].style.backgroundColor = 'turquoise';
  // }

  const bars = document.getElementsByClassName('array-bar');
  const heights = Array.from(bars).map(bar => parseInt(bar.style.height));

  await mergeSortHelper(heights, 0, heights.length - 1, bars, speed);

  // Mark bars as sorted
  for (let i = 0; i < bars.length; i++) {
    bars[i].style.backgroundColor = 'green';
    await delay(10);
  }
};

async function mergeSortHelper(arr, start, end, bars, speed) {
  if (start >= end) return;

  const mid = Math.floor((start + end) / 2);

  await mergeSortHelper(arr, start, mid, bars, speed);
  await mergeSortHelper(arr, mid + 1, end, bars, speed);

  await merge(arr, start, mid, end, bars, speed);
}

async function merge(arr, start, mid, end, bars, speed) {
  let left = arr.slice(start, mid + 1);
  let right = arr.slice(mid + 1, end + 1);

  let i = 0,
    j = 0,
    k = start;

  while (i < left.length && j < right.length) {
    bars[k].style.backgroundColor = 'red';
    await delay(speed);

    if (left[i] <= right[j]) {
      arr[k] = left[i];
      bars[k].style.height = `${left[i]}px`;
      i++;
    } else {
      arr[k] = right[j];
      bars[k].style.height = `${right[j]}px`;
      j++;
    }

    bars[k].style.backgroundColor = 'turquoise';
    k++;
  }

  while (i < left.length) {
    bars[k].style.backgroundColor = 'red';
    await delay(speed);
    arr[k] = left[i];
    bars[k].style.height = `${left[i]}px`;
    bars[k].style.backgroundColor = 'turquoise';
    i++;
    k++;
  }

  while (j < right.length) {
    bars[k].style.backgroundColor = 'red';
    await delay(speed);
    arr[k] = right[j];
    bars[k].style.height = `${right[j]}px`;
    bars[k].style.backgroundColor = 'turquoise';
    j++;
    k++;
  }
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
