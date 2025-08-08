function removeElement(nums, val) {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left++;
    }
  }

  return left;
}

console.log(removeElement([3,2,2,3], 3));
