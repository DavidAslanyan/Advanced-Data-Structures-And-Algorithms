var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (mid > 0 && nums[mid] < nums[mid - 1]) {
            right = mid - 1;
        } else if (mid < nums.length - 1 && nums[mid] < nums[mid + 1]) {
            left = mid + 1;  
        } else {
            return mid;
        }
    }
};
