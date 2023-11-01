/*
You are given a positive integer n.
Your task is to print a palindromic triangle of size n.

For example, a palindromic triangle of size 5 is:
1
121
12321
1234321
123454321
*/

function palindrome(n) {
    for (let i = 1; i <= n; i++) {
        if (i === 1) { console.log(i)}
        else {
            let x = ''; y = 1;
            while (y <= i) { x += y; y += 1}
            y -= 2;
            while (y > 0) {x += y; y -= 1}
            console.log(Number(x));
        }
    }
}

palindrome(10);