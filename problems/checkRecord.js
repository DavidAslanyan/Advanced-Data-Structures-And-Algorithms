/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  let a = 0;
  let l = 0;
  let consec = 0;
  
  for (const char of s) {
      if (char === "L") {
          l++;
          consec++;
      }
      else if (char === "A") {
          a++;
          if (consec > 0) consec = 0;
      }
      else if (char === "P") {
          if (consec > 0) consec = 0;
      }
      
      if (consec >= 3) return false;
  }
  
  if (consec >= 3) return false;
  else if (a >= 2) return false;
  
  return true;
};