// assume we have a sorted arr
function binarySearch(nums, target) {
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target === nums[mid]) return true;
    else if (target < nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
}
