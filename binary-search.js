const binarySearch = (arr, t) => {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === t) {
      return mid;
    } else if (arr[mid] < t) {
      left = mid + 1
    } else if (arr[mid] > t) {
      right = mid - 1;  
    }
  }

  return -1;
}

console.log(binarySearch([5,6,7,8,9,10], 72))
