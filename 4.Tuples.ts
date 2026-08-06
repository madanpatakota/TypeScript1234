//Tuples

export{}

let student:[number , string]     = [ 101 , "Rahul"];
console.log(student[0]) // 101


// Example 3: Employee Details
let employee: [number, string, number] = [
    1001,
    "Anil",
    45000
];



// Example 4: Student Result
let result: [string, boolean] = [
    "Rahul",
    true
];



// Example 5: Product Details
let product: [number, string, number] = [
    101,
    "Laptop",
    65000 ,
];


let user: [number, string] = [1, "Rahul"];

user[1]    = "Ravi";  // rahul

console.log(user)   //1 and ravi




let isloggedIn: [string, boolean] = [
    "Madan",
    true
];

console.log(isloggedIn);




// Example 8: Real-Time Example
let order: [number, string, number, boolean] =
 [
    5001,
    "Mobile",
    25000,
    true
 ];

console.log("Order Id:", order[0]);        // 5001
console.log("Product:", order[1]);   // "Mobile",
console.log("Price:", order[2]);     //25000,
console.log("IsDelivered:", order[3]); //true