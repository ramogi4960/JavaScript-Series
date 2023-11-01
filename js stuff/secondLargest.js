function getSecondLargest(nums) {
    // Complete the function
    nums.sort(function (a, b) {return a - b});
    let x = nums.length - 2;
    while (nums[x] === nums[nums.length - 1]) {
        x --;
    }
    return nums[x];
}
