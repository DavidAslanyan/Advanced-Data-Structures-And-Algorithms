/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxAvg = 0;
    let curSum = 0;

    for (let i = 0; i < k; i++) {
        curSum += nums[i];
    }

    maxAvg = curSum / k;

    for (let i = k; i < nums.length; i++) {
        curSum += nums[i];
        curSum -= nums[i - k];

        maxAvg = Math.max(maxAvg, curSum / k);
    }

    return maxAvg;
};