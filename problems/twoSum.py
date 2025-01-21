def twoSum(nums, target):
  map = {}
  for i, num in enumerate(nums):
    compl = target - num
    if compl in map:
        return [map[compl], i]
    
    map[num] = i 
    
  return []