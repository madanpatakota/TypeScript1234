//a vairable which contains the named constants
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Monday"] = 0] = "Monday";
    Weekdays[Weekdays["TuesDay"] = 1] = "TuesDay";
    Weekdays[Weekdays["Wednesday"] = 2] = "Wednesday";
    Weekdays[Weekdays["Thursday"] = 3] = "Thursday";
    Weekdays[Weekdays["friday"] = 4] = "friday";
})(Weekdays || (Weekdays = {}));
// if(Weekdays.Monday  ===  _______________________){
// }
console.log(Weekdays.Monday); //        0
console.log(Weekdays.TuesDay); //       1
console.log(Weekdays.Wednesday); //     2
console.log(Weekdays.Thursday); //      3
console.log(Weekdays.friday); // 4
var status;
(function (status) {
    status[status["Done"] = 101] = "Done";
    status[status["NotDone"] = 201] = "NotDone";
    status[status["InProgress"] = 301] = "InProgress";
    status[status["Rejected"] = 401] = "Rejected";
})(status || (status = {}));
var status1;
(function (status1) {
    status1[status1["Done"] = 101] = "Done";
    status1[status1["NotDone"] = 102] = "NotDone";
    status1[status1["InProgress"] = 103] = "InProgress";
    status1[status1["Rejected"] = 104] = "Rejected";
})(status1 || (status1 = {}));
console.log(status1.NotDone); // 102
console.log(status.Done); // 101
var TrafficLight;
(function (TrafficLight) {
    TrafficLight["Red"] = "STOP";
    TrafficLight["Yellow"] = "Wait";
    TrafficLight["Green"] = "Go";
})(TrafficLight || (TrafficLight = {}));
console.log(TrafficLight.Red); // stop
// Example 6: Payment Status
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Pending"] = 0] = "Pending";
    PaymentStatus[PaymentStatus["Success"] = 1] = "Success";
    PaymentStatus[PaymentStatus["Failed"] = 2] = "Failed"; //2
})(PaymentStatus || (PaymentStatus = {}));
let payment = PaymentStatus.Success;
console.log(payment); //1
// Example 6: Payment Status
var PaymentStatus1;
(function (PaymentStatus1) {
    PaymentStatus1[PaymentStatus1["Pending"] = 1000] = "Pending";
    PaymentStatus1[PaymentStatus1["Success"] = 1001] = "Success";
    PaymentStatus1[PaymentStatus1["Failed"] = 1002] = "Failed";
})(PaymentStatus1 || (PaymentStatus1 = {}));
let payment1 = PaymentStatus.Success;
console.log(payment); //1001
// Example 7: Order Status (Real-Time)
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Ordered"] = "Ordered";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
let order = OrderStatus.Delivered;
console.log(order); // "Delivered"
export {};
