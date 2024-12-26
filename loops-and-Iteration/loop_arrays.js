// - Looping through arrays using `for`  and `for...of` 

const fruits = ["Apple", "Banana", "Cherry", "Strawberry"];


for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// Apple
// Banana
// Cherry

// using for...of

console.log("Bellow is for...of: ")

for (let fruit of fruits) {
    console.log(fruit)
}