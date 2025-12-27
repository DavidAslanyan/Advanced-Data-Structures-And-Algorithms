/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
  const vowels = {
      "a": 1,
      "e": 1,
      "i": 1,
      "o": 1,
      "u": 1,
      "E": 1,
      "A": 1,
      "I": 1,
      "O": 1,
      "U": 1
  };
  const words = sentence.split(" ");
  let As = "a";
  
  for (let i = 0; i < words.length; i++) {
      let newWord = words[i];
      if (vowels[words[i][0]]) {
          newWord += "ma";
          newWord += As;
          As += "a";
      } else {
          const letter = newWord[0];
          newWord = newWord.slice(1);
          newWord += letter;
          newWord += "ma";
          newWord += As;
          As += "a";
      }
      
      words[i] = newWord;
  }
  
  return words.join(' ');
};