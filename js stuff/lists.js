/* 
Consider a list (list = []). You can perform the following commands:

insert i e: Insert integer  at position .
print: Print the list.
remove e: Delete the first occurrence of integer .
append e: Insert integer  at the end of the list.
sort: Sort the list.
pop: Pop the last element from the list.
reverse: Reverse the list.
Initialize your list and read in the value of  followed by  lines of commands where each command will be of the  
types listed above. Iterate through each command in order and perform the corresponding operation on your list.

Input:
12
insert 0 5
insert 1 10
insert 0 6
print
remove 6
append 9
append 1
sort
print
pop
reverse
print

Output:
[6, 5, 10]
[1, 5, 9, 10]
[9, 5, 1]
*/

let arr = [];
function listing(s) {
    // if insert
    if (s.split(' ').length === 3) {
        arr.splice(Number(s.split(" ")[1]), 0, Number(s.split(" ")[2]));
    }
    else if (s === "print") {
        console.log(arr);
    }
    else if (s === "sort") {
        arr.sort(function(a, b){return a - b});
    }
    else if (s === "reverse") {
        arr.sort(function(a, b){return b - a});
    }
    else if (s === "pop") {
        arr.pop();
    }
    else {
        if (s.split(' ')[0] === "remove") {
            arr.splice(arr.indexOf(Number(s.split(' ')[1])), 1);
        }
        else {
            arr.push(Number(s.split(' ')[1]));
        }
    }
}
listing("insert 0 5"); listing("insert 1 10"); listing("insert 0 6"); listing("print"); listing("remove 6"),
listing("append 9"); listing("append 1"); listing("sort"); listing("print"); listing("pop"); listing("reverse");
listing("print");

