/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {
        "(": ")",
        "[": "]",
        "{": "}"
    };
    const stack = [];

    for (const char of s) {
        if (map[char]) {
            stack.push(map[char]);
        } else {
            if (stack.pop() !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
};