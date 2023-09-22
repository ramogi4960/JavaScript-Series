class Node {
    constructor(val, next=null) {
        this.val = val;
        this.next = null;
    }
}

function printing(head) {
    if (!head) {
        console.log("The linked list is empty");
        return;
    }
    let temp = head;
    while (temp.next) {
        console.log(temp.val);
        temp = temp.next;
    }
    console.log(temp.val);
}

let first_day = new Node("Sunday");
let second_day = new Node("Monday");
let third_day = new Node("Tuesday");
first_day.next = second_day; second_day.next = third_day;

printing(first_day);