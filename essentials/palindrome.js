const isPalindrome = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome([1, 2, 3, 2, 1,8]))