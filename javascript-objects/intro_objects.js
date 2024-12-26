// 1. What is an Object?

// store collections of related data and/or functionality; properties(key-value pairs) and methods (functions inside object) 

// object representing a car

const car = {
    brand: "Toyota", // properties 
    model: "Corolla",
    year: 2021,
    start: function () {
        console.log("The car has started!")
    },
    stop: function () {
        console.log("The car has stopped!")
    }
}

console.log(car);
car.start();
car.stop();