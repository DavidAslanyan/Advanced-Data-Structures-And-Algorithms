var maxSubArray = function(nums) {
  let curSum = 0;
  let maxSum = -Infinity;

  for (const num of nums) {
    curSum += num;
    maxSum = Math.max(curSum, maxSum);
    if (curSum < 0) {
      curSum = 0;
    }
  }  

  return maxSum;
}
