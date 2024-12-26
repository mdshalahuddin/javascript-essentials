// Challenge Task: Calculator Object

/*
Problem:
Create a calculator object with methods:

=> add(a, b) that returns the sum of two numbers.
=> subtract(a, b) that returns the difference.
=> multiply(a, b) that returns the product.
=> divide(a, b) that returns the quotient (handle division by zero).
*/ 

const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return (a - b);
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        if (b === 0) {
            return "Error: Cannot divide by zero"
        }
        return (a /b);
    }
}

// test the calculator
console.log(calculator.add(100, 5))
console.log(calculator.subtract(10, 5))
console.log(calculator.multiply(10, 8))

console.log(calculator.divide(10, 0))