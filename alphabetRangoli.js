/*
You are given an integer, N. Your task is to print an alphabet rangoli of size N.
(Rangoli is a form of Indian folk art based on creation of patterns.)
Different sizes of alphabet rangoli are shown below: 
#size 3

----c----
--c-b-c--
c-b-a-b-c
--c-b-c--
----c----

#size 5

--------e--------
------e-d-e------
----e-d-c-d-e----
--e-d-c-b-c-d-e--
e-d-c-b-a-b-c-d-e
--e-d-c-b-c-d-e--
----e-d-c-d-e----
------e-d-e------
--------e--------

#size 10

------------------j------------------
----------------j-i-j----------------
--------------j-i-h-i-j--------------
------------j-i-h-g-h-i-j------------
----------j-i-h-g-f-g-h-i-j----------
--------j-i-h-g-f-e-f-g-h-i-j--------
------j-i-h-g-f-e-d-e-f-g-h-i-j------
----j-i-h-g-f-e-d-c-d-e-f-g-h-i-j----
--j-i-h-g-f-e-d-c-b-c-d-e-f-g-h-i-j--
j-i-h-g-f-e-d-c-b-a-b-c-d-e-f-g-h-i-j
--j-i-h-g-f-e-d-c-b-c-d-e-f-g-h-i-j--
----j-i-h-g-f-e-d-c-d-e-f-g-h-i-j----
------j-i-h-g-f-e-d-e-f-g-h-i-j------
--------j-i-h-g-f-e-f-g-h-i-j--------
----------j-i-h-g-f-g-h-i-j----------
------------j-i-h-g-h-i-j------------
--------------j-i-h-i-j--------------
----------------j-i-j----------------
------------------j------------------
*/
// the height = (N*2-1)
// the width = (height * 2) - 1

function rangoli(N) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let rows = new Array((((N*2) - 1) * 2) - 1);
    for (let i = 0; i < rows.length; i++) {
        rows[i] = "-";
    }
    // rows = rows.join('');
    // now rows is a string of '-' (((N*2) - 1) * 2) - 1 times
    // from now on, we need to keep replacing items at specific indexes with specific letters as we loop
    // through (N*2-1)
    let left, right = 0;
    let middle = (rows.length - 1)/2;
    let letter = alphabet[N - 1];
    for (let i = 0; i < (N*2) - 1; i++) {
        // top part of rangoli
        if (i < N) {
            if (i === 0) {
                rows[middle] = letter;
                console.log(rows.join(""));
                left = middle - 2;
                right = middle + 2;
            }
            else {
                rows[left] = alphabet[N-1-i];
                rows[right] = alphabet[N-1-i];
                console.log(rows.join(''));
                left -= 2;
                right += 2;
            }
        }
        else {
            left += 2; right -= 2;
            rows[left] = "-";
            rows[right] = '-';
            console.log(rows.join(''));
        }
    }
}

rangoli(11);