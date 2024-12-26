// Real-World Practical Example


// 1. Scenario: Find the even number in an array.

const numbers = [1, 3, 5, 8, 10, 11, 12]

for (let number of numbers) {
        if(number % 2 === 0) {
            console.log(`${number}`);
        
        }
}


console.log("Skip processing invalid data in an array")
// 2. Scenario: Skip processing invalid data in an array


const data = [10, "invalid", 30, "invalid", 50] // 10, 30, 50

for (let item of data) {
  if (typeof item !== "number") continue; //skip the invalid data item
  console.log(item)
}
