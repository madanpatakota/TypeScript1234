export {};

class Animal {
  sound(): void {
    console.log("Animal makes a sound");
  }
}

// let animalabac = new Animal();


class Dog extends Animal {
  override sound(): void {
    console.log("Dog Barks");
  }
}

let dog = new Dog();
dog.sound(); // Dog Barks

class vehicle {
  start(): void {
    console.log("vehicle started");
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

let mobj = new MoterCycle();
mobj.start();





class Payment{
     pay(): void{
         console.log("Payment Successfull");
     }
}

class creditcardpayment extends Payment{
    override pay():void{
      console.log("Using CreditCard Payment done");
    }

}

let payment = new creditcardpayment();
payment.pay();//Using CreditCard Payment done