export{}

// Example 1: Alias for String
type strName = string;

let studentName1 :strName = "Rahul";
let studentName2 :string  = "Priay";

console.log(studentName1);



// Example 2: Alias for Number
type Age = number;
let studentAge: Age = 22;
console.log(studentAge);    // 22


// Example 3: Alias for Object

type Student = {
    id : number,
    name : string
}

let student : Student = {
    id  : 101,
    name : "rahul"
}

console.log(student);


// Example 4: Alias for Employee
type Employee = {
    id: number;
    name: string;
    salary: number;
};

let employee: Employee = {
    id: 1001,
    name: "Madan",
    salary: 50000
};

console.log(employee);



// Example 5: Alias with Function
type Product = {
    id: number;
    name: string;
    price: number;
};


function displayProduct(product: Product): void {
    console.log(product.id);
    console.log(product.name);
    console.log(product.price);
}

displayProduct({
    id: 101,
    name: "Laptop",
    price: 65000
});



//if we made relation b/w 2 objects then thats call inheritiance




// Example 6: Real-Time Example
type Order = {
    orderId: number;
    productName: string;
    amount: number;
    isDelivered: boolean;
};

let order: Order = {
    orderId: 5001,
    productName: "Mobile",
    amount: 25000,
    isDelivered: true
};

console.log(order);