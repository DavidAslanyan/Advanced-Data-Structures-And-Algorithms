/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let i = 0;
    let newS = s;
    while (i < s.length) {
        let curS = shift(newS);
        if (curS === goal) {
            return true;
        }
        newS = curS;
        i++;
    }
    
    return false;
};

function shift(s) {
    const char = s[0];
    let newS = s.substring(1);
    newS += char;
    
    return newS;
}