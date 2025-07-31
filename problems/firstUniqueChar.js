var firstUniqChar = function(s) {
  let chars = new Map();
  
  for (let i = 0; i < s.length; i++) {
    let el = s[i];
    if (chars.has(el)) {
        let currentVal = chars.get(el);
        chars.set(el, currentVal + 1);
    } else {
      chars.set(el, 0);
    }
  }    

  let uniqueChar;
  for (const [key, value] of chars) {
    if (value === 0) {
      uniqueChar = key;
      break;
    }
  }

  return s.indexOf(uniqueChar);
};


