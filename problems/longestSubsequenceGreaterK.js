/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    const map = new Map();

    for (const char of s) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }
    
    let result = 0;
    for (const item of map) {
        const [key, value] = item;
        if (value >= k) {
            result += value;
        }
    }

    return result;
};