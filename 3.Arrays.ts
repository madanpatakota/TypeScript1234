//Arrays

export{}
let marks : number[] = [85, 90 , 95] ;

console.log(marks);


// ctrl c   ---> server



// Example 2: String Array
let fruits: string[] = ["Apple", "Mango", "Orange" ];


console.log(fruits);




// Example 3: Boolean Array
let results: boolean[] = [true, false, true];

console.log(results);



// Example 4: Access Array Elements
let colors: string[] = ["Red", "Green", "Blue"];
//          Colors[0]   --->  "Red";
// Colors[3]   ---> output     ---> undefined 


let a:number = 1

let cities :string[] = ["Banoglre" , "hyderabad"];
let data  = cities.push("Chennai");  ["Banoglre" , "hyderabad", "Chennai"]





// what is push?
// which is useful for add the new value(s) to the required variable


// push is the method of the array
// push method retursn the number


// remember
// what is the return type ( void or nonvoid(number or array of numbers))
// what are the parameters and how many parameters(single or multi or nothing)


function abc(){
    return 1;
}
//here abc return number


console.log(cities);   //  
console.log(data);     // type  boolean decimal number array or undefined

    //39   -- "Banoglre" , "hyderabad"
    //40   -- "Chennai"

    //39   -- "Banoglre" , "hyderabad" , "Chennai"
    //40   --  3

    //39   -- "Banoglre" , "hyderabad" , "Chennai"
    //40   -- "Banoglre" , "hyderabad" , "Chennai"

    //39   -- "Banoglre" , "hyderabad" , "Chennai"
    //40   -- 3


// chennai




//remove last element
//['Banoglre', 'hyderabad', 'Chennai']
let data1 = cities.pop();
console.log(cities);         // --- 'Banoglre', 'hyderabad',
console.log(data1);          // --- chennai

//pop --- No need to pass the parameters
//pop method removes the last element value
// return type is string


//[1,2,3].



// Example 7: Array Length
let students: string[] = ["Rahul", "Anil", "Ravi", "Priya"];


//wen the member is method type then use ()

let data2 = students.length;



// Example 8: Loop Through Array
let subjects: string[] = ["HTML", "CSS", "TypeScript"];

for(let subject  of subjects){
    console.log(subject);    
}



// array and i want the mixed values -- Yes

let data4 : any[] = ["rahul" , 22 , true];





let employees: string[] = [
    "Rahul",                     
    "Anil",
    "Priya",
    "Sneha"
];

console.log("First Employee:", employees[0]);        // "rahul"
console.log("Total Employees:", employees.length);   //  4