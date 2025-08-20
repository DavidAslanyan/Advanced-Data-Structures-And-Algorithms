/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left <= right) {
        const width = right - left;
        const min = Math.min(height[left], height[right]);
        const area = width * min;

        maxArea = Math.max(maxArea, area);

        if (height[left] > height[right]) {
            right--;
        } else {
            left++;
        }
        
    }

    return maxArea;
};