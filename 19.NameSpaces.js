var company;
(function (company) {
    function display() {
        console.log("welcome to _____________  company");
    }
    company.display = display;
})(company || (company = {}));
company.display();
//tomorrow sandeep works in this file
var EmployeeManagement;
(function (EmployeeManagement) {
    class Employee {
        display() {
            console.log("employee details");
        }
    }
    EmployeeManagement.Employee = Employee;
})(EmployeeManagement || (EmployeeManagement = {}));
let emp = new EmployeeManagement.Employee();
emp.display();
// =========================
// Example 3 - Multiple Namespaces
// =========================
var HR;
(function (HR) {
    function recruit() {
        console.log("HR Recruitment");
    }
    HR.recruit = recruit;
})(HR || (HR = {}));
var Finance;
(function (Finance) {
    function salary() {
        console.log("Salary Processed");
    }
    Finance.salary = salary;
})(Finance || (Finance = {}));
HR.recruit();
Finance.salary();
// =========================
// Example 4 - Namespace with Interface
// =========================
var PaymentSystem;
(function (PaymentSystem) {
    class UPI {
        pay(amount) {
            console.log("Paid ₹" + amount);
        }
    }
    PaymentSystem.UPI = UPI;
})(PaymentSystem || (PaymentSystem = {}));
let payment = new PaymentSystem.UPI();
payment.pay(500);
export {};
