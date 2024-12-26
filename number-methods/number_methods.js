// JavaScript Number methods: toFixed(), parseInt(), parseFloat()

// 1. toFixed(): 

const price = 150.985726122335; // 5 or up

const fixedThisNumber = price.toFixed(3);

console.log("Fixed this number: ", fixedThisNumber)


// 2. parseInt(): convert a string to a number or decimal point to integer
// integer numbers: 0-9 => 99, 590, 50150022445

const str1 = "42";
const str2 = "abcd42"; // not digit number X (NaN or Not a Number)
const str3 = "45abcd";

console.log(parseInt(str1))
console.log(parseInt(str2)) // NaN or Not a Number
console.log(parseInt(str3))

// using the radix parameter
// Binary (base 2) to decimal (base 10)

const binaryNumber = "1010"; // Output: 10
console.log("The decimal number is: ", parseInt(binaryNumber, 2))

// Hexadecimal (base 16) to decimal (base 10) 
//  Hexadecimal numbers: 0-9, A, B, C, D, E, F

const hexadecimalNumber  = "F";
const hexadecimalNumber2 = "DC24"
console.log("The decimal number is: ", parseInt(hexadecimalNumber, 16)) 
console.log(parseInt(hexadecimalNumber2, 16))


// 3. parseFloat(), convert a string to a decimal number

/*
{
 "name": "Product 1",
 "price": "5.99",
 "description": "Description",
 "quantity": "10",
 "rating": "4.5",
 "category": "Electronics"
}
*/

const str4 = "3.1415"
console.log(parseInt(str4))
console.log(parseFloat(str4))

const productPrice1 = "5.99";
const productPrice2 = "4.58";

const totalPrice =  parseFloat(productPrice1) + parseFloat(productPrice2);

console.log("Total price: ", totalPrice)