/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) { 
  let totalSum = 0;
  for (const num of nums) totalSum += num;

  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
      const rightSum = totalSum - leftSum - nums[i];
      if (rightSum === leftSum) return i;
      leftSum += nums[i];
  }  

  return -1;
};