class Node {
    constructor(val, next=null) {
        this.val = val;
        this.next = null;
    }
}

function printing(head) {
    if (head === null) {
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
