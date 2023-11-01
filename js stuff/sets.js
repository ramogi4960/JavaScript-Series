/*
find the average value of distinct number within an array */

let input_string = "161 182 161 154 176 170 167 171 170 174";

let set_items = new Set(input_string.split(" "));
let total = 0;
for (x of set_items.values()){total += Number(x)}
let average = total/set_items.size;
console.log(average.toFixed(3));


/*Rupal has a huge collection of country stamps. She decided to count the total number of distinct 
country stamps in her collection. She asked for your help. You pick the stamps one by one from a stack of
country stamps.
Find the total number of distinct country stamps.

input:
UK
China
USA
France
New Zealand
UK
France 

output:
5
 */

let countries = `UK China USA France Kenya UK France`;
console.log(new Set(countries.split(" ")).size);