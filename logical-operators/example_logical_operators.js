// Practical example of Combining Logical Operators
const isProMembership = true;
const isLoggedIn = true;

const hasAccessCode = false;


if((isProMembership &&  isLoggedIn ) || hasAccessCode) {
    console.log("You can enjoy the Web Development Course")
} else {
    console.log("Access Denied! Please buy membership or course.")
}