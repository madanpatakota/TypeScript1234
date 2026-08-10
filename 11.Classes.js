class Student {
    constructor() {
        this.id = 101;
        this.name = "priya";
    }
}
let student = new Student();
// student.id;
// student.name;
console.log(student);
console.log(student.id);
console.log(student.name);
class Employee {
    constructor() {
        this.id = 101;
        this.name = "priya";
    }
    display() {
        console.log("Employee Id:", this.id);
        console.log("Employee Name:", this.name);
    }
}
let emp = new Employee();
emp.display();
export {};
