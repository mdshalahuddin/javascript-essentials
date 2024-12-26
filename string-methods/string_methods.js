// String methods: length, toUpperCase(), toLowerCase(), slice(), substring(), etc.


// 1. how to calculate a length of a string

const paragraph =  `Elon Musk has stepped up his ongoing feud with ChatGPT-maker OpenAI with a revived lawsuit against the firm, adding Microsoft as a defendant.

Mr Musk, a co-founder of the artificial intelligence (AI) company, accused it and the tech giant of operating a monopoly in an amended legal complaint on Thursday.

It follows previous lawsuits accusing the firm of breaching the principles he agreed to when he helped found it in 2015.

Microsoft declined to comment on the lawsuit.`

console.log("The length of the paragraph is: ", paragraph.length)


// 2. Uppercase & Lowercase of text
let greeting = "Hello, Developers!"

// TODO: "HELLO, DEVELOPERS!"
const makeUppercase = greeting.toUpperCase();
console.log(makeUppercase)

// TODO: "hello, developers!"
const makeLowerCase = greeting.toLowerCase();
console.log(makeLowerCase)

// slice() methods (Extract a part of string);

let phrase =  "Welcome to JavaScript!" // JavaScript

console.log(phrase.slice(11, -1))

// substring() methods (Extract a part of string and not accept negative)

const subText =  phrase.substring(11, 21)
console.log("Substring: ", subText)

// 6. trim() methods

let word =  "          Coding!                                                      "

const trimWord =  word.trim();

console.log(trimWord)

const combineMethods =  word.trim().toUpperCase(); //CODING!

console.log(combineMethods)
