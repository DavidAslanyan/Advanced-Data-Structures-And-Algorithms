/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, n) {
  let count = 0;
  
  while (count < n) {
      let og = [...cells];
      
      for (let i = 0; i < og.length; i++) {
          if (i === 0 || i === og.length - 1) {
              cells[i] = 0;
              continue;
          }
          
          if (og[i - 1] === 0 && og[i + 1] === 0 ||
              og[i - 1] === 1 && og[i + 1] === 1) {
              cells[i] = 1;
          } else {
              cells[i] = 0;
          }
      }
      
      count++;
  }
  
  return cells;
};