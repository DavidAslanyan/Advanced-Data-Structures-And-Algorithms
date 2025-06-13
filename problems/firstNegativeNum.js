function firstNegativeNum(nums, k) {
  const result = [];
  let min = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      result.push(nums[i]);
    }
  }


  return result;
}

console.log(firstNegativeNum([12, -1, -7, 8, -15, 30, 16, 28], 3))