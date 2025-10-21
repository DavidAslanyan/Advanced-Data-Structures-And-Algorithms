/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const map = new Map();

  for (const num of arr) {
      if (map.has(num)) {
          map.set(num, map.get(num) + 1)
      } else {
          map.set(num, 1);
      }
      
  }

  const set = new Set();
  for (const item of map) {
      const [key, value] = item;

      if (set.has(value)) return false;
      else set.add(value);
  }

  return true;
};