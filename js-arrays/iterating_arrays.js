// Lesson 3: Iterating Over Arrays

const fruits = ["Apple", "Banana", "Cherry"];

console.log("Length of the array: ", fruits.length)

/*

for (conditions) {
    // code or logic
}

*/

for (let i = 0; i < fruits.length; i++) {
   console.log(fruits[i])
}

// using forEach 

console.log("Below is an example of forEach----")

fruits.forEach((fruit) => {
    console.log( fruit)
})

// using map 
console.log("Using map ----")

fruits.map((fruit) => {
    console.log(fruit)
})
