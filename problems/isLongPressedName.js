/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  if (name[0] !== typed[0]) return false;
  
  let left = 0;
  let right = 0;
  
  while (right < typed.length) {
      if (left < name.length && typed[right] === name[left]) {
          right++;
          left++;
      } else if (right > 0 && typed[right] === typed[right - 1]) {
          right++;
      } else {
          return false;
      }
  }

  
  return left === name.length;
};