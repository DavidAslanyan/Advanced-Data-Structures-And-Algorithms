/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s === null || s.length < 1) return "";
    if (s.length < 2) return s;

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        const len1 = expandFromMiddle(s, i, i);
        const len2 = expandFromMiddle(s, i, i + 1);
        const maxLen = Math.max(len1, len2);

        if (maxLen > end - start + 1) {
            start = i - Math.floor((maxLen - 1) / 2);
            end = i + Math.floor(maxLen / 2);
        }
    }
    
    return s.slice(start, end + 1);
};

function expandFromMiddle(s, left, right) {
    if (s === null || left > right) return 0;

    while (left >= 0 && right < s.length && s[left] == s[right]) {
        left--;
        right++;
    }

    return right - left - 1;
}