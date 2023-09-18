/*
find the average value of distinct number within an array */

let input_string = "161 182 161 154 176 170 167 171 170 174";

let set_items = new Set(input_string.split(" "));
let total = 0;
for (x of set_items.values()){total += Number(x)}
let average = total/set_items.size;
console.log(average.toFixed(3));
