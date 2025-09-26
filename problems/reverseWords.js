/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = [];
    let word = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== " ") {
            word += s[i];
        } else {
            if (word !== "") {
                result.push(word);
                word = "";
            }
        }
    }
    if (word !== "") result.push(word);

    let left = 0;
    let right = result.length - 1;

    while (left < right) {
        let temp = result[left];
        result[left] = result[right];
        result[right] = temp;
        
        left++;
        right--;
    }

    return result.join(' ');
};