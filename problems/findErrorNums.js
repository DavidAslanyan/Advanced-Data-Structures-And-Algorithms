/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  nums = nums.sort((a, b) => a - b);
  const correctNums = [];
  let i = 1;
  while (i <= nums.length) {
      correctNums.push(i);
      i++
  }
  
  let duplicate = 0;
  const obj = {};
  const newArr = [];

  for (const num of nums) {
      if (obj[num]) duplicate = num;
      else {
          obj[num] = true; 
          newArr.push(num);
      }
  }

  for (let i = 0; i < nums.length; i++) {
      if (correctNums[i] !== newArr[i]) {
          return [duplicate, correctNums[i]];
      }
  }

  return [];
};