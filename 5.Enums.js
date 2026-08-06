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
console.log(status.Done); // 101
export {};
