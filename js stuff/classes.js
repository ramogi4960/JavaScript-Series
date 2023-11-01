export default class Student{
    constructor(firstname, lastname, birth) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birth = birth;
    }

    age(){
        return Number(Date().split(' ')[3]) - this.birth;
    }

    fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}

