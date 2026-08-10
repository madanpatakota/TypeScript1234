let employeeId;
employeeId = 101;
employeeId = "Emp101";
console.log(employeeId); // "Emp101";
// Example 2: Number or Boolean
let status;
status = true;
console.log(status); //true
status = 1;
console.log(status); //1 
function printID(id) {
    console.log("employee id ", id);
}
printID(1);
printID("Emp101");
//TypeChecking 
function displayValue(value) {
    if (typeof value == "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
displayValue("hello"); //HELLO
displayValue(1234.678976); //1234.68
// Example 5: Union Type with Array
let data = ["mango", "banana", 1, 2];
let payment;
payment = "Fail";
console.log(payment); //"Fail"
let tcsemployee;
let infosisemployee;
tcsemployee = 101;
infosisemployee = "emp101";
export {};
