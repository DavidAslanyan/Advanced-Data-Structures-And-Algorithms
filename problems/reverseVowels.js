/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr = s.split("");
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        if (isVowel(arr[left]) && isVowel(arr[right])) {
            let temp = arr[right];
            arr[right] = arr[left];
            arr[left] = temp;
        }
        
        if (isVowel(arr[left]) && !isVowel(arr[right])) {
            right--;
            continue;
        }
        
        if (!isVowel(arr[left]) && isVowel(arr[right])) {
            left++;
            continue;
        }
        
        left++;
        right--;
    }
    
    return arr.join("");
};

    
function isVowel(char) {
    const vowels = ['a','e','i','o','u','A','E','I','O','U'];
    
    return vowels.includes(char);
}