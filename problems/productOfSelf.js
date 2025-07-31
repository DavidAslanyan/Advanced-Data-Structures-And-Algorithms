function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);
       
    let prefixProduct = 1;
    for (let i = 0; i < n; i++) {   
        result[i] = prefixProduct;
        prefixProduct *= nums[i];
    }     

    let suffixProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffixProduct;
        suffixProduct *= nums[i];
    }
  
    return result;
}

console.log('Result', productExceptSelf([1,2,3]))
