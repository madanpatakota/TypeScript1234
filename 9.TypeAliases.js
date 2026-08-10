let studentName1 = "Rahul";
let studentName2 = "Priay";
console.log(studentName1);
let studentAge = 22;
console.log(studentAge); // 22
let student = {
    id: 101,
    name: "rahul"
};
console.log(student);
let employee = {
    id: 1001,
    name: "Madan",
    salary: 50000
};
console.log(employee);
function displayProduct(product) {
    console.log(product.id);
    console.log(product.name);
    console.log(product.price);
}
displayProduct({
    id: 101,
    name: "Laptop",
    price: 65000
});
let order = {
    orderId: 5001,
    productName: "Mobile",
    amount: 25000,
    isDelivered: true
};
console.log(order);
export {};
