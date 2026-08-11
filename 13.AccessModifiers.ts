export {}


// by default everymmeber in class is PUBLIC

class Student{
    public name :string = "Peter";
}

let stu = new Student();
console.log(stu.name); // PETer


class Employee{
    private password:string  = "%^&^$##";

    displayPassword(){
        console.log("Password is " , this.password);
    }

}


let emp1 = new Employee();
emp1.displayPassword(); 


class Person{
    protected age : number = 25;
}


class Teacher extends Person{
      displayAge() : void{
            console.log("age is" , this.age);
      }
}


let teacher = new Teacher();
teacher.displayAge();



// Example 4: Real-Time Example
class BankAccount {


    public accountHolder: string = "Rahul";
    private balance: number = 50000;

    showBalance(): void {
        this.balance = this.balance + 300;
        console.log("Updated Balance:", this.balance);
    }

}

let account = new BankAccount();

console.log(account.accountHolder);

account.showBalance();

// ❌ Error
// console.log(account.balance);


