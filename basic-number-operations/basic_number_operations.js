// Basic number operations: addition, subtraction, multiplication, division

// 1. Addition (+)

let a = 15, b= 5;

let sum = a + b;

console.log(`The sum of ${a} and ${b} is: ${sum}`)

// practical example

let product1 = 20.9988888;
let product2 = 10.50;

let totalPrice = product1 + product2;

console.log("Total price: ",  totalPrice.toFixed(2))

// 2. Subtraction (-)


let difference =  a - b; // 10

console.log("Subtraction: ", difference)

// practical example of subtraction
let budget = 100;
let expense = 45.25;
let remining =  budget - expense;
console.log("The remainging amount is: ", remining)


// 3. Multiplication (*)

let product = a * b;

console.log("The product is: ", product)

// practical example of multiplication

let length =  5 // in meters
let width = 3 // in meters

let area =  length * width;

console.log(`Area of the rectangle is: ${area} squar meters`)

// 4. Division (/)

let quotient = a / b;

console.log("The quatient is: ", quotient );


// practical example of division
let totalBill = 120;
let numberOfFriends = 4;

let share = totalBill / numberOfFriends;

console.log("Each friend pays: $", share)


// Combining Operations

let x = 10, y=5, z= 2;

const result =  (x + y) * z - (y / z); 

console.log("The result is: ", result)