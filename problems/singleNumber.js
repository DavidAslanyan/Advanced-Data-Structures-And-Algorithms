var singleNumber = function(nums) {
    const map = new Map;

    for (const num of nums) {
        if (map.has(num)) map.set(num, map.get(num) + 1);
        else map.set(num, 1);
    }

    for (const item of map) {
        const [key, value] = item;

        if (value === 1) {
            return key;
        }
    }

    return 1;
};