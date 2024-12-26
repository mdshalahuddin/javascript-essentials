// Data Types in JavaScript (Primitive and Non-Primitive)


// 1. Primitive Data Types: basic data types & immutable (cannot be changed) 

/*
1. String: 

    let name = "Mamun";
    name = "Alex"

2. Number: ex- 42, 3.14

3. Boolean: true, false

4. Null: null

    let height =  null; // no value assigned

5. Undefined: not assigned value to variable
    
    let weight;

6. Symbol: unique values as objects property key

    let id = Symbol('uniqueID');
*/


// 2. Non-Primitive Data Types: complex data types, mutable (changeable)  and stored as references in memory

/*
1. Objects: collections of keys and values pair

    let person = {
    name: "Mamun",
    age: 22,
    address: "Dhaka"
    }

2. Arrays: Ordered list of values

    let numbers =  [1, 2, 3, 4, 5]

3. Functions: reusable blocks of code and perform an actions

   function greet() {
        console.log("Hi, I am X")
   }

*/

// Practical Example

// Primitive Data Type Example
let x = 10; // Number (primitive)
let y = x; // value is copied

console.log("X is: ", x)
console.log("Y is: ", y)

y = 20;

console.log("2nd time Y is: ", y)
console.log("2nd time X is: ", x) // 10 (orginal value unchanged)


// practical example of Non-primitive 

let obj1 = {
    a: 10
};

let obj2 = obj1;

console.log("The obj2", obj2)

obj2.a = 20;
console.log("2nd time of The obj2 =>", obj2)  
console.log("2nd time of The obj1 =>", obj1)  // orginal object modified