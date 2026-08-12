// class Animal {
//   sound(): void {
//     console.log("Animal makes a sound");
//   }
// }
//basic abstract class
class Animal {
    eat() {
        console.log("Animal is eating");
    }
}
// let animalabc = new Animal();
class Dog extends Animal {
    sound() {
        console.log("Dog Barks");
    }
}
let dog = new Dog();
dog.sound(); // dog barks;
dog.eat(); // animal is eating
class vehicle {
    stop() {
        console.log("vehicle stopped");
    }
}
class Car extends vehicle {
    start() {
        console.log("Car started");
    }
}
class MoterCycle extends vehicle {
    start() {
        console.log("Motelcycle started");
    }
}
let carobj = new Car();
carobj.start();
carobj.stop();
let mobj = new MoterCycle();
mobj.start();
mobj.stop();
class Payment {
    receipt() {
        console.log("receipt generated");
    }
}
class creditcardpayment extends Payment {
    pay() {
        console.log("Using CreditCard Payment done");
    }
}
let payment = new creditcardpayment();
payment.pay(); //Using CreditCard Payment done
payment.receipt();
export {};
