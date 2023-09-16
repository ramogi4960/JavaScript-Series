/*
You have to generate a list of the first  fibonacci numbers,  being the first number.
Then, apply the map function and a lambda expression to cube each fibonacci number and print the list.
 */

function fib(n) {
    let fibList = [0, 1];
    // assuming n > 2
    for (let i = 3; i <= n; i++) {
        fibList.push(fibList[fibList.length - 1] + fibList[fibList.length - 2]);
    }
    return fibList;
}

// console.log(fib(5).map(x => {return x**3}));