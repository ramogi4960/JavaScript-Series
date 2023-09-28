/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let count = 0;
    let expected = heights.sort((x ,y) => x - y);
    console.log(expected);
    console.log(heights);
    for (let x = 0; x < heights.length; x += 1) {
        console.log(heights[x]);
        console.log(expected[x]);
        if (heights[x] !== expected[x]) {count += 1}
    }
    return count;
}

console.log(heightChecker([1,1,4,2,1,3]));