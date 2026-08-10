export {}


let employeeId : string | number | boolean  | string[] | number[]

employeeId = 101;
employeeId = "Emp101"

console.log(employeeId);  // "Emp101";


// Example 2: Number or Boolean
let status: number | boolean;

status = true;
console.log(status);  //true

status = 1;
console.log(status);   //1 


function printID(id : number | string) : void{
    console.log("employee id " , id);
}

printID(1);
printID("Emp101");


//TypeChecking 

function displayValue(value : string | number)  : void{
  
     if(typeof value == "string"){
        console.log(value.toUpperCase());
     }
     else{
         console.log(value.toFixed(2))
     }
}

displayValue("hello");    //HELLO
displayValue(1234.678976);  //1234.68



// Example 5: Union Type with Array

let data:( string | number )[] = ["mango" , "banana" , 1 , 2] ;


//Real time example

//HOw we apply UNION Concept to the TypeAlase

type PaymentStatus = "Pending" | "Sucess" | "Fail";

let payment : PaymentStatus;

payment = "Fail";
console.log(payment);   //"Fail"


type empID = number | string;

let tcsemployee     : empID;
let infosisemployee : empID;

tcsemployee      = 101;
infosisemployee  = "emp101"
