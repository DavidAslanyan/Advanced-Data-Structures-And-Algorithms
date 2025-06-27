var findDisappearedNumbers = function(nums) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        map.set(i + 1, 1);
    }  
    
    for (const num of nums) {
        if (map.get(num)) {
            map.set(num, map.get(num) + 1);
        }
    }
    
    const result = [];
    for (const item of map) {
        const [key, value] = item;
        
        if (value === 1) {
            result.push(key);
        }
    }
    
    return result;
};