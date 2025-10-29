/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let slow = n;
    let fast = calc(n);

    while (fast !== 1 && slow !== fast) {
        slow = calc(slow);
        fast = calc(calc(fast));
    }
    
    return fast === 1;
};

function calc(n) {
    let sum = 0;

    while (n > 0) {
        let lastDigit = n % 10;
        sum += lastDigit ** 2;
        n = Math.floor(n / 10);
    }

    return sum;
}