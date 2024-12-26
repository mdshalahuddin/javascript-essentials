// Lesson 4: Combining, Slicing, and Joining Arrays

// 1. concat(): combine arrays

const arr1 = [1, 2];
const arr2 = [3, 4];
 
// output: create a new array: [1, 2, 3, 4]

const combinedArr = arr1.concat(arr2);
const combinedArr2 = arr2.concat(arr1); // [3, 4, 1, 2]
console.log(combinedArr)
console.log(combinedArr2)


// 2. slice(): 

const animals = ["Lion", "Tiger", "Bear", "Elephant"]; // ["Tiger, "Bear"]

const subset = animals.slice(1, 3)

console.log(subset)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // [3, 4, 5, 6];

const newNumbers =  numbers.slice(2, 6)

console.log(newNumbers)


// join(): 

const words = ["Hello", "World"] // "Hello World"
const sentence = words.join(" ");

console.log(sentence)