var majorityElement = function(nums) {
    const map = new Map();
   
    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
  
    for (const item of map) {
        const [key, value] = item;

        if (value > nums.length / 2) {
            return key;
        }
    }
 
    return 1;
};
