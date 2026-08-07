export{}

// let student = {
//      id : 101 ,
//      name : "rahul",
//      ispassed : false
// }


let student  : {id:number , name :string , ispassed:boolean} = {
     id : 101 ,
     name : "rahul",
     ispassed : false
}

console.log(student);

// Example 2: Access Object Properties
console.log(student.id);   // 101
console.log(student.name);   // rahl
console.log(student.ispassed);  // false

// rahul to anil
student.name = "anil";
console.log(student.name);//anil
console.log(student);

// Example 4: Employee Object
let employee: {
    id: number;
    name: string;
    salary: number;
    city: string;
} = {
    id: 1001,
    name: "Madan",
    salary: 50000,
    city: "Bangalore"
};

console.log(employee);



// Example 4: Employee1 Object
let employee1: {
    id: number;
    name: string;
} = {
    id: 1001,
    name: "Madan",
};

console.log(employee1);


// Example 5: Function with Object Parameter
function displayEmployee(emp:{
        id: number;
        name: string;
    })
{
   console.log(emp.id);
   console.log(emp.name);
}

displayEmployee({
       id : 2001, name : "Ravi"
    });


//  nested subquery 
// Example 6: Nested Object
let company = {
    name: "MISARD",
    address: {
        city: "Bangalore",
        state: "Karnataka"
    }
};


console.log(company.name);
console.log(company.address.city);



// Example 7: Object with Array
let course = {
    courseName  : "TypeScript",
    students    : ["Rahul", "Anil", "Priya"]
};

console.log(course.courseName);
console.log(course.students);