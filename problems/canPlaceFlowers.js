/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let f = flowerbed;

    if (f.length === 1) {
        if (f[0] === 0 && n === 1) return true;
        if (f[0] === 0 && n === 0) return true;
        if (f[0] === 1 && n === 0) return true;
        else return false;
    }

    for (let i = 0; i < f.length; i++) {
        if (i === 0 && f[i] === 0 && f[i + 1] === 0 && n !== 0) {
            f[i] = 1;
            n--;
            continue;
        }

        if (i === f.length - 1 && f[i] === 0 && f[i - 1] === 0 && n !== 0) {
            f[i] = 1;
            n--;
            continue;
        }

        if (f[i] === 0 && f[i - 1] === 0 && f[i + 1] === 0 && n !== 0) {
            f[i] = 1;
            n--;
        }
    }

    return n === 0;
};