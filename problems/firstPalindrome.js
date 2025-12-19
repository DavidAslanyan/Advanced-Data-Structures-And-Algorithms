/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
  for (const word of words) {
      if (isPalindrome(word)) return word;
  }

  return "";
};


function isPalindrome(word) {
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
      if (word[left] !== word[right]) return false;
      left++;
      right--;
  }

  return true;
}