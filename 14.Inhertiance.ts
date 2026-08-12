export{}

//Basic inhertiance
class Animal{
     eat() : void{
         console.log("Aniaml is Eatig");
     }
}

class Dog extends Animal{

}

let dog = new Dog();
dog.eat() ; // Animal is Eating



//Parent and child properties


class Person{
    name : string = "Peter";
}

class Student extends Person{
     course : string = "TypeScript";
}

let student = new Student();

student.name   // Peter
student.course  // Typescript



// Methods 
class Employee{
     work() : void{
         console.log("Employee is working");
     }
}

class Manager extends Employee{
    manage(): void {
        console.log("Manager is Managing Team");
    }
}


let manager = new Manager();
manager.manage();
manager.work();