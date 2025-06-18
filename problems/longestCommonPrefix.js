var longestCommonPrefix = function(strs) {
    let s = strs;
    let result = "";

    for (let i = 0; i < s[0].length; i++) {
        let char = s[0][i];

        for (let j = 1; j < s.length; j++) {
            if (i >= s[j].length || s[j][i] !== char) {
                return result;
            }
        }

        result += char;
    }

    return result;
};

// On^2