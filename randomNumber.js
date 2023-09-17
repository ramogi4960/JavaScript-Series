/* Write a function that finds a random between two numbers provided as arguments */

function random(min, max)
{
    return Math.floor(Math.random() * Math.abs(max - min + 1)) + min;
}

console.log(random(30, 101));