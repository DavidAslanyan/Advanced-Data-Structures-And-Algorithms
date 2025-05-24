function isIsomorphic(str1, str2) {
  if (str1.length !== str2.length) {
      return false;
  }

  const map = new Map();
  const set = new Set();

  for (let i = 0; i < str1.length; i++) {

      // Taking ith char from both strings
      char1 = str1.charAt(i);
      char2 = str2.charAt(i);

      // If char1 has already been mapped
      if (map.has(char1) == true) {

          // Then we have to check that 
          // mapped char should be same
          if (map.get(char1) !== char2) {
              return false;
          }
      }

      // If char1 is appearing for the first time
      else {

          // Check in the set that the char2
          // is already there or not
          if (set.has(char2)) {
              return false;
          }

          // If none of above condition is true
          // it means both char1 and char2 are 
          // appearing for the first time
          // insert them into the map
          map.set(char1, char2);
          set.add(char2);
      }
  }
  return true;
}
str1 = "ABCA";
str2 = "XYZX";
console.log(isIsomorphic(str1, str2));