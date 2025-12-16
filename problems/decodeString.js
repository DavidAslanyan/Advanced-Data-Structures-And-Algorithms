/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
      if (s[i] != "]") {
          stack.push(s[i]);
      } else {
          let str = "";
          while (stack[stack.length - 1] != "[") {
              str = stack.pop() + str;
          }
          stack.pop();

          let num = "";
          while (isDigit(stack[stack.length - 1])) {
              num = stack.pop() + num;
          }

          num = parseInt(num);
          while (num > 0) {
              stack.push(str);
              num--;
          }
      }
  }

  return stack.join('');
};

function isDigit(char) {
  return char >= '0' && char <= '9';
}