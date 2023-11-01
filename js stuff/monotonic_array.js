/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    function checker(new_list, sorted_list) {
        for (let i = 0; i < new_list.length; i += 1) {
            if (new_list[i] !== sorted_list[i]) {return false}
        }
        return true;
    }
    let new_nums = [];
    nums.forEach((x) => new_nums.push(x));
    // now new_nums === nums
    nums.sort((a, b) => a - b);
    // now nums is sorted. Compare nums with new_nums using checker()
    if (checker(new_nums, nums) === true) {return true}
    // then we sort nums in reverse and then return the value after checking using checker()
    nums.sort((a, b) => b - a);
    return checker(new_nums, nums);
}