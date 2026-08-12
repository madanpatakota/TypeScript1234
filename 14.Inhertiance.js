//Basic inhertiance
class Animal {
    eat() {
        console.log("Aniaml is Eatig");
    }
}
class Dog extends Animal {
}
let dog = new Dog();
dog.eat(); // Animal is Eating
//Parent and child properties
class Person {
    constructor() {
        this.name = "Peter";
    }
}
class Student extends Person {
    constructor() {
        super(...arguments);
        this.course = "TypeScript";
    }
}
let student = new Student();
student.name; // Peter
student.course; // Typescript
// Methods 
class Employee {
    work() {
        console.log("Employee is working");
    }
}
class Manager extends Employee {
    manage() {
        console.log("Manager is Managing Team");
    }
}
let manager = new Manager();
manager.manage();
manager.work();
export {};
