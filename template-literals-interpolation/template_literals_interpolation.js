// Template Literals and String Interpolation (for dynamic and multi-line strings)

let name =  "Alice";

let age = 25;

// TODO: My name is Alice, and I am 25 years old.

const message =  `My name is ${name}, and I am ${age} years old.`

console.log(message)


// Multiline Strings

let text2 = `This is a 

                    multi-line string
`
console.log(text2)

//  Combining with Expressions

// let x = 5;

// let y = 10;

let x = 5, y = 10;

console.log(`The sum of x and y is: ${x + y}`)