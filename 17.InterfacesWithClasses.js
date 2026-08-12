// UPI taking the contract i.e. IPament so here UPI should implement the pay() method
// contractor takes the contract of road. then he should work on that needs to complete
class UPI {
    pay() {
        console.log("UPI Payment successful");
    }
}
class CreditCard {
    pay() {
        console.log("Credit card Payment successful");
    }
}
let upi = new UPI();
upi.pay();
let cp = new CreditCard();
cp.pay();
class MultiFunctionPrinter {
    print() {
        console.log("prining....");
    }
    scan() {
        console.log("scanning");
    }
}
let printer = new MultiFunctionPrinter();
printer.print();
printer.scan();
class Manager {
    constructor() {
        this.id = 101;
        this.name = "peter";
    }
    display() {
        console.log(this.id);
        console.log(this.name);
    }
}
let manager = new Manager();
manager.display();
class SoftwareEngineer {
    getSalary() {
        return 50000;
    }
    getName() {
        return "Peter";
    }
}
let se = new SoftwareEngineer();
console.log(se.getName());
console.log(se.getSalary());
export {};
