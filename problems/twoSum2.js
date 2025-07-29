var twoSum = function(nums, target) {
  let map = new Map();
  let el;
  for (let i = 0; i < nums.length; i++) {
      el = nums[i];
      if (map.has(target - el)) return [map.get(target - el), i];
      else map.set(el, i);
  }
  
  return [];
}; 
