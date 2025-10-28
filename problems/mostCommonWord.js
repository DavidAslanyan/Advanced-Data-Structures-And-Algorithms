/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const p = paragraph;
    const words = [];
    
    let word = "";
    for (let i = 0; i < p.length; i++) {
        if (isChar(p[i])) {
            word += p[i].toLowerCase();
        } else {
            if (word !== "") {
                words.push(word);
                word = "";
            }
        }
    }
    
    if (word !== "") words.push(word);
    
    const map = new Map();
    
    for (const word of words) {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            if (!banned.includes(word)) {
                map.set(word, 1);
            }
        }
    }
    
    let max = 0;
    let maxKey = "";
    for (const item of map) {
        const [key, value] = item;
        
        if (value > max) {
            max = value;
            maxKey = key;
        }
    }
    
    return maxKey;
};

function isChar(char) {
    char = char.toLowerCase();
    if (char.length !== 1) return false;
    const code = char.charCodeAt(0);
    
    return code >= 97 && code <= 122;
}