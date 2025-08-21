/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const times = nums.length / 3;
    const map = new Map();
    const result = [];
    
    for (const num of nums) {
        if (map.has(num)) {
            map.set(num,map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
    
    for (const item of map) {
        const [key, value] = item;
        if (value > times) {
            result.push(key);
        }
    }
    
    return result;
};