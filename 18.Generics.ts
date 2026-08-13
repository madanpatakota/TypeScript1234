export{}

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


function display<T>(value:T) : T{
    return value;
}

console.log(display<number>(100));
console.log(display<string>("Madan"));
console.log(display<boolean>(true));


function printArray<T>(items:T[]) : void{
   for(let item of items){
       console.log(item);
   }
}

printArray<number>([10 , 20 , 30]);
printArray<string>(["peter" , "clerk" , "john"]);


// real time example
//browser storage concept -- Generics

// Key is in stringvalue is in string


//generics to classes
class DataStore<T>{
    
      data : T;

      constructor(value : T){
         this.data = value;
      }

      display() : void{
           console.log(this.data);
      }

}

let employeeName = new DataStore<string>("Madan");
employeeName.display();   // "Madan"

let employeeSalary = new DataStore<number>(50000.89);
employeeSalary.display();   // 50000.89

let employeeID = new DataStore<number>(101);
employeeID.display();   // 101



//generics to classes

interface IResponse<T>{
    Success : boolean;
    data : T;
}

let employeeResponse : IResponse<string> = {
    Success : true,
    data    : "Employee Created Successfully"
}

console.log(employeeResponse);


let SalaryResponse : IResponse<number> = {
    Success : false,
    data    : 50000
}

console.log(SalaryResponse);