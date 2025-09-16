/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' ');
    
    if (pattern.length !== words.length) return false;

    const charToWord = new Map();
    const wordToChar = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const p = pattern[i];
        const w = words[i];

        if (charToWord.has(p)) {
            if (charToWord.get(p) !== w) return false;
        } else {
            charToWord.set(p, w);
        }

        if (wordToChar.has(w)) {
            if (wordToChar.get(w) !== p) return false;
        } else {
            wordToChar.set(w, p);
        }
    }

    return true;
};
