// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially.
// The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]

function removeDuplicates(nums: number[]): number {
  let k = 1;
  if (nums.length < 2) return nums.length;

  const len = nums.length;
  let i = 1;
  while (nums[i] !== -101 && i < len) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      nums.push(-101);
    }
    else {
      k++;
      i++;
    }
  }

  return k;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([1,2]));