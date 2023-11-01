/*
You are given a string S which contains alphanumeric characters only.
Your task is to sort the string in the following manner:
-> All sorted lowercase letters are ahead of uppercase letter
-> All sorted uppercase letters are ahead of digits
-> All sorted odd digits are ahead of even digits 
 */

function sorting(s) {
    let lower = []; upper = []; even = []; odd = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[a-z]/)) {
            lower.push(s[i]);
        }
        else if (s[i].match(/[A-Z]/)) {
            upper.push(s[i]);
        }
        else {
            if (Number(s[i]%2 === 0 || s[i] === '0')) {
                even.push(s[i]);
            }
            else {
                odd.push(s[i]);
            }
        }
    }
    lower.sort(); upper.sort();
    even.sort(function (a, b) {return Number(a) - Number(b)}); odd.sort(function (a, b) {return Number(a) - Number(b)});
    console.log(`${lower.join('')}${upper.join('')}${odd.join('')}${even.join('')}`);
}

sorting("Sorting1234");