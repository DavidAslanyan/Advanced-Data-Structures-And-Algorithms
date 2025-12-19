/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
  const arr = [];
  
  for (const word of words) {
      const obj = {};
      for (let i = 0; i < word.length; i++) {
          obj[word[i]] = (obj[word[i]] | 0) + 1;
      }
      arr.push(obj);
  }
  
  const result = [];
  for (const char of words[0]) {
      let count = 0;
      for (const obj of arr) {
          if (obj[char]) {
              obj[char]--;
              count++;
          }
      }
      if (count === words.length) result.push(char);
  }
  
  return result
};