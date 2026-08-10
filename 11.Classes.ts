export {}


class Student{
     id   : number = 101 ;
     name : string = "priya"
}

let student = new Student();
// student.id;
// student.name;

console.log(student);

console.log(student.id);
console.log(student.name);


class Employee{
       id   : number = 101 ;
       name : string = "priya" 

       display() : void {
          console.log("Employee Id:", this.id);
          console.log("Employee Name:", this.name);
       }
}

let emp = new Employee();
emp.display();