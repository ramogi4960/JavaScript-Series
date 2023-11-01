// You are given a string and your task is to swap cases. In other words, convert all lowercase letters to uppercase letters and vice versa.

// For Example:

// Www.HackerRank.com → wWW.hACKERrANK.COM
// Pythonist 2 → pYTHONIST 2  
// Function Description

// Complete the swap_case function in the editor below.

// swap_case has the following parameters:

// string s: the string to modify
// Returns

// string: the modified string
// Input Format

// A single line containing a string .


function swap_case(s) {
    let x = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i].toUpperCase() === s[i]) {
            x += s[i].toLowerCase();
        }
        else {
            x += s[i].toUpperCase();
        }
    }

    return x;
}

console.log(swap_case("Www.HackerRank.com"));