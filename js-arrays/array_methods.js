// Lesson 2: Array Methods

// 1) push() : add new element to the end of the array

const numbers = [1, 2, 3]; // [1, 2, 3, 4];

numbers.push(4);
numbers.push(5);
numbers.push("A");

console.log(numbers)

// 2. pop() : remove element from the end of the array
const colors = ["red", "green", "blue", "yellow"];

console.log("Before pop: ", colors)

const removeLastColor = colors.pop();

console.log(colors)

// 3. shift(): remove first element of the array;
const cities = ["New York", "London", "Paris"]

const removeFirstCity =  cities.shift();

console.log(cities)
console.log(cities[0])

// 4. unshift(): add element to the beginning of the array

const animals = ["Dog", "Cat"];

animals.unshift("Elephant");

console.log(animals)