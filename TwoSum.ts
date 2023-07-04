/**
* @summary Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
Returns in any order. Returns [0] if not found
*
* @param {number[]} nums
* @param {number} target
* @returns {number} num
*/
const twoSum = function(nums: number[], target: number): number[] | -1 {
  const map = new Map();
  for (let i = 0; i< nums.length; i++) {
      const complement = target - nums[i];
      
      if (map.has(complement)) {
          return [map.get(complement), i];
      }
      
      map.set(nums[i], i);
  }
  return -1;
};
