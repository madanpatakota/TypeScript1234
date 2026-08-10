let student = {
    id: 101,
    name: "Rahul",
    isPassed: true
};
console.log(student);
let employee = {
    id: 1001,
    name: "Madan",
    salary: 50000,
    city: "Bangalore"
};
console.log(employee);
let customer1 = {
    id: 1,
    name: "Rahul"
};
let customer2 = {
    id: 2,
    name: "Anil",
    email: "anil@gmail.com"
};
console.log(customer1);
console.log(customer2);
function displayProduct(product) {
    console.log("Product Id:", product.id);
    console.log("Product Name:", product.name);
    console.log("Price:", product.price);
}
displayProduct({
    id: 101,
    name: "Laptop",
    price: 65000
});
displayProduct({
    id: 102,
    name: "Mobile",
    price: 10000
});
let user = {
    id: 1,
    Name: "PRiya",
    address: {
        city: "hyderabad",
        state: "Telangana"
    }
};
let order = {
    orderId: 5001,
    productName: "Mobile",
    amount: 25000,
    isDelivered: true
};
console.log(order);
export {};
