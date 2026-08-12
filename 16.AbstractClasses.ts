export{}



// class Animal {
//   sound(): void {
//     console.log("Animal makes a sound");
//   }
// }
//basic abstract class
abstract class Animal{  //abstract class
      abstract sound():void;    //abstract method    but we can override this methods into the child

      eat(): void{
          console.log("Animal is eating");
      }
}

// let animalabc = new Animal();


class Dog extends Animal{
    override sound():void{
        console.log("Dog Barks");
    }
}

let dog = new Dog();
dog.sound();  // dog barks;
dog.eat();    // animal is eating






abstract class vehicle {
    abstract start(): void;

    stop():void{
       console.log("vehicle stopped");
    }
}

class Car extends vehicle {
  override start(): void {
    console.log("Car started");
  }
}

class MoterCycle extends vehicle {
  override start(): void {
    console.log("Motelcycle started");
  }
}

let carobj = new Car();
carobj.start();
carobj.stop();

let mobj = new MoterCycle();
mobj.start();
mobj.stop();















abstract class Payment{
     abstract pay():void;

     receipt():void{
         console.log("receipt generated");
     }
}

class creditcardpayment extends Payment{
    override pay():void{
      console.log("Using CreditCard Payment done");
    }
}

let payment = new creditcardpayment();
payment.pay();//Using CreditCard Payment done
payment.receipt();



