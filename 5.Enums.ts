export {}


//a vairable which contains the named constants

enum Weekdays{
     Monday,
     TuesDay,
     Wednesday,
     Thursday,
     friday
}


// if(Weekdays.Monday  ===  _______________________){



// }


console.log(Weekdays.Monday);     //        0
console.log(Weekdays.TuesDay);    //       1
console.log(Weekdays.Wednesday);   //     2
console.log(Weekdays.Thursday);   //      3
console.log(Weekdays.friday)     // 4


enum status{
     Done         = 101,
     NotDone      = 201,
     InProgress   = 301,
     Rejected     = 401
}




enum status1{
     Done         = 101,
     NotDone    ,  
     InProgress  , 
     Rejected     ,
}

console.log(status1.NotDone);  // 102


console.log(status.Done);  // 101


enum TrafficLight{
    Red    = "STOP",
    Yellow = "Wait",
    Green  = "Go"
}

console.log(TrafficLight.Red);   // stop





// Example 6: Payment Status
enum PaymentStatus {
    Pending,           //0
    Success,           //1
    Failed             //2
}

let payment = PaymentStatus.Success;
console.log(payment);    //1




// Example 6: Payment Status
enum PaymentStatus1 {
    Pending    = 1000,           
    Success,           
    Failed            
}

let payment1 = PaymentStatus.Success;
console.log(payment);    //1001



// Example 7: Order Status (Real-Time)
enum OrderStatus {
    Ordered = "Ordered",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Cancelled = "Cancelled"
}

let order = OrderStatus.Delivered;

console.log(order);   // "Delivered"