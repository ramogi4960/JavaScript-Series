/*
Write a function with two parameters: s: string and n: number
The function should print every n character of s in a newline

input:
ABCDEFGHIJKLIMNOQRSTUVWXYZ
4

output:
ABCD
EFGH
IJKL
IMNO
QRST
UVWX
YZ
 */

function textwrap (s, n) {
    let newline = '';
    for (let i = 0; i < s.length; i += n) {
        try {
            console.log(s.slice(i, i+n));
        }
        catch {
            console.log(s.slice(i, s.length - i));
        }
    }
}

textwrap("ABCDEFGHIJKLIMNOQRSTUVWXYZ", 4);

