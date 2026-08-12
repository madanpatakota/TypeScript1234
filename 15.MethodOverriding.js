class Animal {
    sound() {
        console.log("Animal makes a sound");
    }
}
// let animalabac = new Animal();
class Dog extends Animal {
    sound() {
        console.log("Dog Barks");
    }
}
let dog = new Dog();
dog.sound(); // Dog Barks
class vehicle {
    start() {
        console.log("vehicle started");
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
let mobj = new MoterCycle();
mobj.start();
class Payment {
    pay() {
        console.log("Payment Successfull");
    }
}
class creditcardpayment extends Payment {
    pay() {
        console.log("Using CreditCard Payment done");
    }
}
let payment = new creditcardpayment();
payment.pay(); //Using CreditCard Payment done
export {};
