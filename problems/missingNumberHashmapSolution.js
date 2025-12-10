/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const map = new Map();

  for (let i = 0; i < nums.length + 1; i++) {
      map.set(i, 0);
  }

  for (let i = 0; i < nums.length + 1; i++) {
      if (map.has(nums[i])) {
          map.set(nums[i], 1);
      }
  }

  for (const item of map) {
      const [key, val] = item;

      if (val === 0) return key;
  }

  return -1;
};