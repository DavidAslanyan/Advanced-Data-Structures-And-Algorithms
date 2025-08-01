const twoSum = (arr, target) => {
  let left = 0, right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return true;
    if (sum < target) left++;
    else right--;
  }
  
  return false;
}

console.log(twoSum([1, 2, 4, 7, 11], 9))
