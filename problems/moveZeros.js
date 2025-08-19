var moveZeroes = function(nums) {
    if (nums.length === 1) return nums;

    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            if (left !== right) {
                nums[left] = nums[right];
                nums[right] = 0;
            }
            left++;
        }
    }

    return nums;
};