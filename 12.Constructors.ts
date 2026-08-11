export {}

//simple constructor
class Student{
    id:number;
    name:string;
    //parameter less constructor.
    constructor(){
        this.id = 101;
        this.name = "rahul";
    }
}

let student = new Student();
console.log(student.id);  // 101
console.log(student.name); // rahul


class Employee{
      id:number;
      name:string;

      //paramter constructore
      constructor(eid : number , ename :string){
        this.id = eid;
        this.name = ename;
      }
}

let emp = new Employee(101 , "Priay");
console.log(emp.id)    // 101
console.log(emp.name)  //priay

// Example 3: Multiple Objects
class Product {

    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

}

let product1 = new Product(101, "Laptop", 65000);
let product2 = new Product(102, "Mobile", 25000);

console.log(product1);
console.log(product2);



class Car {

    brand: string;
    model: string;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }
    
    start():void{
        console.log(this.brand + " " + this.model + " Started");
    }
}

let car1 = new Car("Renault" , "Duster");
car1.start();


let car2 = new Car("BMW" , "x5");
car2.start();















