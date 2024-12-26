// 2. Creating Objects with Properties and Methods

// create a new object for a student

const student = {
    name: "Mamun",
    age: 23,
    subjects: ["Math", "Physics", "Chemistry", "ICT", "English", "Bangla"], // array property
    greet: function () {
        console.log(`Hello, This is ${this.name}! Nice to meet you.`)
    }
}

student.greet();