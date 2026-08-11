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





//Mulitplie objects to the class
class Product{
    id : number = 0;
    name :string = "";
    price : number = 0;
}


let product1 = new Product();
product1.id = 101;
product1.name = "laptop";
product1.price = 65000

let product2 = new Product();
product2.id = 102;
product2.name = "mobile";
product2.price = 15000

console.log(product1);
console.log(product2);


//expample 6 

class Car{

    brand: string = "BMW";
    model: string = "X5";

    start(): void {
        console.log(this.brand + " " + this.model + " Started");
    }
}


let car = new Car();
car.start();












