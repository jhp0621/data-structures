//Bubble sort: useful if the data is nearly sorted
//Time: Best O(n), Avg O(n^2), Worst O(n^2); Space: O(1)
function bubbleSort(arr) {
  let sorted = false;
  for (let i = arr.length; i > 0 && !sorted; i--) {
    sorted = true;
    for (let j = 0; i < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        sorted = false;
      }
    }
  }
  return arr;
}

//Selection Sort: useful if you want to minimize the # of swaps
//Time: Best O(n^2), Avg O(n^2), Worst O(n^2); Space: O(1)
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (lowest !== i) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

//Insertion Sort: useful if the data is nearly sorted or when using "online algo" (i.e., algo that works as data is coming in) since it keeps one side sorted
//Time: Best O(n), Avg O(n^2), Worst O(n^2); Space: O(1)
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      let temp = array[j - 1];
      array[j - 1] = array[j];
      array[j] = temp;
      j--;
    }
  }
  return arr;
}

//Merge Sort: best if we want to optimize time complexity
//Time: Best O(n log n), Avg O(n log n), Worst O(n log n); Space: O(n)
function merge(arr1, arr2) {
  let results = [],
    i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr1[j]);
    j++;
  }
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr; //base
  let mid = Math.floorr(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
