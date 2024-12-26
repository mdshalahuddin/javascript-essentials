// Math object for complex operations: Math.round(), Math.random(), Math.max()

// 1. Math.round() to make a floting numbe to a nearest integer 
// 0.5 upper number 

const number1 =  4.9; // convert to 5
const number2 = 4.2; // 4.5 or 4

console.log(`Rounded value of ${number1} is: `, Math.round(number1))
console.log(`Rounded value of ${number2} is: `, Math.round(number2))
console.log("The amount is: ", Math.ceil(number2)) // convert to upper number

// Note: e-commerce applications 

// 2. Math.random() to generate a random number between 0 and 1

let randomNumber = Math.random(); // between 0 and 1

console.log("The random number is: ", randomNumber)


// generate a random number between 1 and 10; 

const randomNumberBetween10 =  Math.floor(Math.random() * 10) + 1;

console.log(" The random number is of 1 to 10 is: ", randomNumberBetween10)

// Note: OTPs and Random IDs


// 3. Math.max() returns the largest value from a set of numbers
const num1 = 5;
const num2 = 10;
const num3 = 11;

const maxNumber =  Math.max(num1, num2, num3);

console.log("The largest number is: ", maxNumber)

// finding the largest number of an array
const numbers = [23, 89, 45, 68, 95];
const largestNumber = Math.max([23, 89, 45, 68, 95]) // spread operator
console.log("The largest number is: ", largestNumber)

// Note:  highest score of a game, quiz app, or maximum temperature

