export {}


interface Student{
    id : number,
    name : string,
    isPassed : boolean
}


let student : Student  = {
     id : 101 , 
     name : "Rahul",
     isPassed : true
}


console.log(student); 



// Example 2: Employee Interface
interface Employee {
    id: number;
    name: string;
    salary: number;
    city: string;
}


let employee: Employee = {
    id: 1001,
    name: "Madan",
    salary: 50000,
    city: "Bangalore"
};

console.log(employee);



// Example 3: Optional Property
interface Customer {
    id: number;
    name: string;
    email?: string;
}

let customer1: Customer = {
    id: 1,
    name: "Rahul"
};


let customer2: Customer = {
    id: 2,
    name: "Anil",
    email: "anil@gmail.com"
};



console.log(customer1);
console.log(customer2);





//optional 

// function Emp(empid : number , hobbies?:string[]){

// }

// Emp(101);




// Example 4: Interface with Function
interface Product {
    id: number;
    name: string;
    price: number;
}

function displayProduct(product:Product) : void{
    console.log("Product Id:", product.id);
    console.log("Product Name:", product.name);
    console.log("Price:", product.price);
}

displayProduct({
    id : 101 ,
    name : "Laptop",
    price : 65000
})

displayProduct({
    id : 102 ,
    name : "Mobile",
    price : 10000
})


//Nested interface 
interface Address {
    city: string;
    state: string;
}

// VVIMPs
interface User{
   id : number,
   Name : string,
   address : Address
}

let user : User = {
   id : 1 ,
   Name : "PRiya",
   address : {
    city : "hyderabad",
    state : "Telangana"
   }
}




// Example 6: Real-Time Example

interface Order {
    orderId: number;
    productName: string;
    amount: number;
    isDelivered: boolean;
}


let order: Order = {
    orderId: 5001,
    productName: "Mobile",
    amount: 25000,
    isDelivered: true
};


console.log(order);





interface ICustomerService{
    id : number 
    FetchCustomer() : string,
    CreateCustomer() : number,
    UpdateCustomer() : number,
    DeleteCustomer() : number,
}