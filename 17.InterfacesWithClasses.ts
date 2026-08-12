export{}


interface IPayment{
    pay() : void;   // only definations methods not implementaitons
}


// UPI taking the contract i.e. IPament so here UPI should implement the pay() method

// contractor takes the contract of road. then he should work on that needs to complete

class UPI implements IPayment{
     pay():void{
          console.log("UPI Payment successful");
     }
}


class CreditCard implements IPayment{
     pay():void{
          console.log("Credit card Payment successful");
     }
}


let upi = new UPI();
upi.pay();


let cp = new CreditCard();
cp.pay();




interface IPrinter{
    print():void;
}
interface IScanner{
    scan():void
}

class MultiFunctionPrinter implements IPrinter , IScanner{
    print(): void {
          console.log("prining....")
    }
    scan(): void {
        console.log("scanning");
    }
}


let printer = new MultiFunctionPrinter();
printer.print();
printer.scan();




interface IEmployee {
    id: number;
    name: string;
   
    display():void;
}

class Manager implements IEmployee{
      id = 101;
      name = "peter";

      display(): void {
          console.log(this.id);
          console.log(this.name);
      }
}

let manager = new Manager();
manager.display();



interface Person{
     getName() : string;
}

interface Developer extends Person{
      getSalary(): number;
}

class SoftwareEngineer implements Developer{
     getSalary(): number {
           return 50000
     }

     getName(): string {
         return "Peter"
     }
}

let se = new SoftwareEngineer();
console.log(se.getName());
console.log(se.getSalary());