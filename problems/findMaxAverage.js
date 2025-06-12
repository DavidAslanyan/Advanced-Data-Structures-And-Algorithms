// Fixed Sliding Window Easy

var findMaxAverage = function(nums, k) {
    if (nums.length < k) return 0;

    let maxSum = 0;
    let windowSum = 0;

    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }

    maxSum = windowSum / k;

    for (let i = k; i < nums.length; i++) {
        windowSum = windowSum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, windowSum / k);
    }

    return maxSum;
};
