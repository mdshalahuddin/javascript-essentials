// Functions in JavaScript

// how to define a function

/*

function functionName (parameters) {
    // logic or code
}
 
*/

// without parameters
function greet () {
    console.log("Hi, there!")
}

// call the function

greet();
greet();
greet();
greet();
greet();

// with parameters (here name is a parameter)

function greetUser (name) {
    console.log(`Hello, ${name}! How can I help you?`)
}

greetUser("Mamun") // arguments

greetUser("Mr. X");


// 2. parameters and return values
/*
parameters => input values
return values => output
*/

// make a function to add two or values

function addNumbers (num1, num2) {
    return num1 + num2;
}

const result =  addNumbers(5, 10) // functional expression

console.log("The result is ", + result)

const result2 = addNumbers(105, 971)
console.log(result2)


// 3. Arrow Funtion (=>)

    /*

const functionName = () => {
        // code here
}

*/

const multiplyTwoNumbers = (num1, num2) => num1 * num2;


console.log("The result is ", + multiplyTwoNumbers(5, 10))
console.log("The result is ", + multiplyTwoNumbers(5, 7))


// 4. Function Expressions and Anonymous Functions

const difference =  (a, b) => a - b;

const result3 = difference(10, 2) //3

console.log("The result3 is: ", result3)


// annonymous functions in a callback (no name)

const friends = ["Alex", "John", "Tom", "Bob", "Mr. X"];

friends.forEach((friend) => console.log(`Welcome, ${friend}!`))