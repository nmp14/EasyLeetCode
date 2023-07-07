// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

function searchInsert(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;

  while (true) {
    const mid = Math.floor((low + high) / 2);
    const num = nums[mid];

    if (high - low <= 1) {
      if (target <= nums[low]) return low;
      else if (target <= nums[high]) return high;
      else return high + 1;
    }

    if (num > target) high = mid;
    else if (num < target) low = mid;
    else return mid;
  }
};

console.log(searchInsert([1,3,5,6], 7)); // -> 4
console.log(searchInsert([1,3,5,6], 2)); // -> 1
console.log(searchInsert([1,3,5,6], 5)); // -> 2
console.log(searchInsert([1], 1)); // -> 0
console.log(searchInsert([1,3,5], 1)); // -> 0
console.log(searchInsert([1,3,6,9], 9)); // -> 3