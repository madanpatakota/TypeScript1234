export{}

namespace company{
    export function display() : void {
          console.log("welcome to _____________  company")
     }
}

company.display();

//tomorrow sandeep works in this file


namespace EmployeeManagement{
     export class Employee{
          display() : void{
              console.log("employee details");
          }
        }
}

let emp = new EmployeeManagement.Employee();
emp.display();

// =========================
// Example 3 - Multiple Namespaces
// =========================

namespace HR {

    export function recruit(): void {
        console.log("HR Recruitment");
    }

}

namespace Finance {

    export function salary(): void {
        console.log("Salary Processed");
    }

}

HR.recruit();
Finance.salary();


// =========================
// Example 4 - Namespace with Interface
// =========================

namespace PaymentSystem {

    interface Payment {
        pay(amount: number): void;
    }

    export class UPI implements Payment {

        pay(amount: number): void {
            console.log("Paid ₹" + amount);
        }

    }

}

let payment = new PaymentSystem.UPI();
payment.pay(500);