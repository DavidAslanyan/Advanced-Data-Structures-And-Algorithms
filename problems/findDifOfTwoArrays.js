/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  const uniqueNums1 = new Set();
  for (const num of nums1) uniqueNums1.add(num);

  const uniqueNums2 = new Set();
  for (const num of nums2) uniqueNums2.add(num);

  const result1 = [];
  const result2 = [];

  for (const num of uniqueNums1) {
      if (!uniqueNums2.has(num)) {
          result1.push(num);
      }
  }

  for (const num of uniqueNums2) {
      if (!uniqueNums1.has(num)) {
          result2.push(num);
      }
  }

  return [result1, result2];
};