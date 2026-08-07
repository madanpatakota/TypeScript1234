function greet() {
    console.log("Welcome to TypeScript");
}
greet();
function greet1() {
    console.log("Welcome to TypeScript");
    return 1;
}
let a = greet1();
console.log(a);
// Example 2: Function With Parameters - non reutrn
function displayStudentDetails(name, age) {
    console.log("Name:", name);
    console.log("Age:", age);
}
displayStudentDetails("rhul", 20);
// Example 3: Function With Return Value
function add(num1, num2) {
    return num1 + num2;
}
let result = add(10, 20);
console.log("Sum:", result); // 30
// Example 4: Function Returning String
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(getFullName("Madan", "Mohan"));
// Example 5: Optional Parameter
function showEmployee(name, city) {
    console.log("Name:", name);
    console.log("City:", city);
}
showEmployee("Anil");
showEmployee("Rahul", "Bangalore");
// Example 6: Default Parameter
function calculateSalary(salary, bonus = 5000) {
    return salary + bonus;
}
console.log(calculateSalary(50000));
console.log(calculateSalary(50000, 10000));
// Example 7: Arrow Function
const multiply = (a, b) => {
    return a * b;
};
console.log("Multiplication:", multiply(5, 6));
// Example 8: Real-Time Example
function calculateBill(price, quantity) {
    return price * quantity;
}
let total = calculateBill(25000, 2);
console.log("Total Bill:", total);
export {};
