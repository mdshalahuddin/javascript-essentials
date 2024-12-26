// conditional statements (if, else if, and else) in JavaScript

// conditional statements syntax

/*
if (condition1) {
    // code block 
  } else if (condition2) {
    // code block 
  } else {
    // code block
  }

*/

//  1. if Statement

let age = 16;


// 2. else Statement

if (age >= 18) {
    console.log("You are eligible to vote!")
} else {
    console.log("You are not eligible to vote!")
}

// 3. else if Statement

let score = 53;

if(score >= 90) {
    console.log("Grade: A")
} else if (score >= 80) {
    console.log("Grade: B")
} else if (score >= 70) {
    console.log("Grade: C")
} else {
    console.log("Grade: F")
}
