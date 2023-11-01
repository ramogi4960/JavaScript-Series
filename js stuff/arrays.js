let arr = [40, 100, 1, 5, 26];
console.log(arr.reduce(my_function));

function my_function(total=8, value) {
    return total + value;
}