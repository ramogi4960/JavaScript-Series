/* You are given a positive integer .
Your task is to print a palindromic triangle of size .

For example, a palindromic triangle of size  is:
1
121
12321
1234321
123454321
 */

function palindrome_number(n) {
    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            console.log(1);
        }
        else {
            let x = '';
            let start = 1;
            while (start <= i) {
                x += start.toString();
                start ++;
            }
            start -= 2;
            while (start > 0) {
                x += start.toString();
                start --;
            }
            console.log(parseInt(x));
        }
        

    }
}

palindrome_number(5);