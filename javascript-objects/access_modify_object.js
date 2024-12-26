// 3. Accessing and Modifying Object Properties

//  a) Dot notation (object.property)

//  b) Bracket notation (object["property"]): for dynamic or special characters accessing


const book = {
    title: "JavaScript Basics",
    author: "Mamun",
    pages: 250,
}

// access properties
console.log(book.title);
console.log(book["author"])

// update or modify properties
book.pages = 300;
console.log(book.pages) // 300

book["title"] = "Advanced JavaScript";
console.log("After updating title: ", book.title);

// add new properties

book.publisher =  "ABC Publications";

console.log(book)