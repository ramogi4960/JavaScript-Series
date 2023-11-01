/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let count = 0;
    let expected = [];
    heights.forEach((x) => expected.push(x));
    heights.sort((x ,y) => x - y);
    for (let x = 0; x < heights.length; x += 1) {
        if (heights[x] !== expected[x]) {count += 1}
    }
    return count;
}