function maxNonOverlapSegments(A) {
    const sumMap = new Map();
    const n = A.length;

    for (let i = 0; i < n - 1; i++) {  // [10, 1, 3, 1, 2, 2, 1, 0, 4]
        const sum = A[i] + A[i + 1];
        if (!sumMap.has(sum)) {
            sumMap.set(sum, []);    // map: 11 => [], 4 => [1, 2, 4, 7], 3 => [3, 5], 1 => [6]
        }
        sumMap.get(sum).push(i);
    }

    console.log(sumMap.values())

    let maxCount = 0;

    
    for (const indices of sumMap.values()) {
        let count = 0;
        let lastUsed = -1;
        for (const i of indices) {
            if (i > lastUsed) {
                count++;
                lastUsed = i + 1; 
            }
        }
        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
}

