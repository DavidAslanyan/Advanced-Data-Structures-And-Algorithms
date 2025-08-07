function isPalindromeNumber(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let reversed = 0;
  let original = x;

  while (x > 0) {
    let lastDigit = x % 10;
    reversed = reversed * 10 + lastDigit;
    x = Math.floor(x / 10);  
  }

  return reversed === original
}
  
console.log(isPalindromeNumber(121))
