// Logical Operators in JavaScript: &&, ||, !

// 1.Logical AND (&&) - both side true
// condition1 && condition2

const mathScore = 33;
const scienceScore = 90;

if (mathScore >= 50 && scienceScore >= 50) {
    console.log("The student passed both exam!")
} else{
   console.log("The students failed one subjet or both subject")
}


// 2. Logical OR (||)  
// condition1  or condition2 => partial true

let isProMembership = true;  //false
const hasCoupon =  true; //true

if (isProMembership || hasCoupon) {
 console.log("You can enroll my course!")
} else {
 console.log("You can't enroll my course. Please buy membership or course!")
}

// 3. Logical NOT (!)

// !condition => true => false
// !condition => false => true

const isLoggedIn =  true;

if (!isLoggedIn) {
    console.log("Please log in!")
} else{
    console.log("Welcome back!")
}

