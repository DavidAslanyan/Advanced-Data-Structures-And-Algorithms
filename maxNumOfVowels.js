/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  const vowels = {'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1};
  let count = 0;
  let max = 0;

  for (let i = 0; i < k; i++) {
      if (vowels[s[i]]) count++;
  }

  if (count === k) return count;

  max = count;

  for (let i = k; i < s.length; i++) {

      if (vowels[s[i]]) count++;

      if (vowels[s[i - k]]) count--;

      max = Math.max(max, count);
  }

  return max;
};
