// by default everymmeber in class is PUBLIC
class Student {
    constructor() {
        this.name = "Peter";
    }
}
let stu = new Student();
console.log(stu.name); // PETer
class Employee {
    constructor() {
        this.password = "%^&^$##";
    }
    displayPassword() {
        console.log("Password is ", this.password);
    }
}
let emp1 = new Employee();
emp1.displayPassword();
class Person {
    constructor() {
        this.age = 25;
    }
}
class Teacher extends Person {
    displayAge() {
        console.log("age is", this.age);
    }
}
let teacher = new Teacher();
teacher.displayAge();
// Example 4: Real-Time Example
class BankAccount {
    constructor() {
        this.accountHolder = "Rahul";
        this.balance = 50000;
    }
    showBalance() {
        this.balance = this.balance + 300;
        console.log("Updated Balance:", this.balance);
    }
}
let account = new BankAccount();
console.log(account.accountHolder);
account.showBalance();
export {};
// ❌ Error
// console.log(account.balance);
