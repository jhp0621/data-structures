//Bubble sort
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
