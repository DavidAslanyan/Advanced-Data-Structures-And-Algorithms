/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
  const set = new Set();
  
  for (const candy of candyType) {
      if (set.size < candyType.length / 2) {
          set.add(candy);
      }
  }
  
  return set.size;
};