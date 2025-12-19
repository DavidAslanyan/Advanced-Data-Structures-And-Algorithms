/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const result = [];
  
  for (let i = 0; i < arr2.length; i++) {
      for (let j = 0; j < arr1.length; j++) {
          if (arr2[i] === arr1[j]) {
              result.push(arr1[j]);
          }
      }
  }
  
  const remain = [];
  const set = new Set(arr2);
  
  for (const num of arr1) {
      if (!set.has(num)) {
          remain.push(num)
      }
  }
  
  return [...result, ...remain.sort((a, b) => a -b)];
};