// String
// Number
// Boolean
// Any
// Unknown
// Void       -- function
// Null
// Undefined
var studentName = "Rahul"; // Rahul
let age = 10; // 10
//age.toFixed(2)   = 10.00;
let isPassed = true; // true
let studentName1 = "rahul"; // rahul
let whatsinYOUrMInd = 1234; // 1234
let nothing = null; // null
let notAssigned = undefined; //undefined
//diff any and unknown..
let value1 = "Hello";
console.log(value1.toUpperCase()); // "HELLO"
value1 = 100.679099;
console.log(value1.toFixed(2)); // 100.68
//console.log(value1);
// API -----> u r not sure about the data -- real time case ....  make sure that u should not use that data. 
//only for the display . on that data u should not take actions
let value2 = "Hello world";
//console.log(value2.toUpperCase());  // "HELLO"   why u r going to apply the uppecase tothe unknown value????
if (typeof (value2) == "string") { // tsc ---> value2 incase its string
    console.log(value2.toUpperCase());
}
else if (typeof (value2) == "number") {
    console.log(value2.toFixed(2));
}
export {};
