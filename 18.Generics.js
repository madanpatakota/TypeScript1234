//fine funciton which returns always number
// function displaytest(value:number) : number{
//     return value;
// }
// function displayNumber(value:number) : number{
//     return value;
// }
// displayNumber(100);
// function displayString(value:string) : string{
//     return value;
// }
// displayString("Madan")
// function displayboolean(value:boolean) : boolean{
//     return true;
// }
// displayboolean(true)
function display(value) {
    return value;
}
console.log(display(100));
console.log(display("Madan"));
console.log(display(true));
function printArray(items) {
    for (let item of items) {
        console.log(item);
    }
}
printArray([10, 20, 30]);
printArray(["peter", "clerk", "john"]);
// real time example
//browser storage concept -- Generics
// Key is in stringvalue is in string
//generics to classes
class DataStore {
    constructor(value) {
        this.data = value;
    }
    display() {
        console.log(this.data);
    }
}
let employeeName = new DataStore("Madan");
employeeName.display(); // "Madan"
let employeeSalary = new DataStore(50000.89);
employeeSalary.display(); // 50000.89
let employeeID = new DataStore(101);
employeeID.display(); // 101
let employeeResponse = {
    Success: true,
    data: "Employee Created Successfully"
};
console.log(employeeResponse);
let SalaryResponse = {
    Success: false,
    data: 50000
};
console.log(SalaryResponse);
export {};
