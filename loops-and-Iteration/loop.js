// - `for`  loop, `while`  loop, `do...while`  loop

// 1. for loop

/*
for (initialization; conditions ; increment/decrement) {
    // code here
}

*/

// create a for loop

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 2. while loop

/*
while (condition) {
    // 1. code here
    // 2. increment/decrement
}
*/

console.log("Below is while condition: ")
let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}


// 3. do...while loop

/* 
do {
    // code here
} while (condition)

*/

let password;

do {
    password = prompt("Please enter your password: ")
} while (password !== "12345");

console.log("Access granted: " + password)