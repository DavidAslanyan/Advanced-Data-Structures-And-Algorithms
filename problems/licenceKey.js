/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
  let filtered = "";
  for (const char of s) {
      if (char !== "-") filtered += char;
  }
  
  const groupsLen = Math.floor(filtered.length / k);
  
  let itrs = 0;
  let group = "";
  const result = [];
  
  for (let i = filtered.length - 1; i >= 0; i--) {
      if (itrs < k) {
          group += filtered[i].toUpperCase();
          itrs++;
      } else {
          result.push(group);
          group = filtered[i].toUpperCase();
          itrs = 1;
      }
  }
  
  if (group !== "") result.push(group);

  const arr = result.reverse().map(str => str.split('').reverse().join(''));
  
  let joined = "";
  
  for (let i = 0; i < arr.length; i++) {
      joined += arr[i];
      if (i !== arr.length - 1) joined += "-";
  }   
  
  return joined;
};