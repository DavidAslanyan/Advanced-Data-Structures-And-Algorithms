/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const maxChars = Math.max(word1.length, word2.length);
    let result = "";

    let i = 0;
    while (i < maxChars) {
        if (word1[i]) result += word1[i];
        if (word2[i]) result += word2[i];
        i++;
    }

    return result;
};