/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let count = 0;
    nums.sort((a ,b) => a - b);
    for (let x = 0; x < nums.length; x += 2) {count += nums[x]}
    return count;
}