var missingNumber = function(nums) {
    let n = nums.length + 1;
    let total = (n * (n -1)) / 2;

    for (const num of nums) {
        total -= num;
    }

    return total;
};