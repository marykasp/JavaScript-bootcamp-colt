let mystery = 5;

if (mystery) {
  console.log("TRUTHY");
} else {
  console.log("FALSY");
}

let loggedInUser = null; // falsy value

if (loggedInUser) {
  console.log("You are logged in")
} else {
  console.log("Please log in")
}

// LOGICAL AND OPERATOR- &&: both sides must be true
let password = "taco tuesday";
if (password.length >= 6 && password.indexOf(' ') === -1) {
  console.log("Valid password")
} else {
  console.log("INVALID PASSSWORD")
}

// let num = 3;

// if (num >= 1 && num <= 10) {
//   console.log("Number is between 1 and 10");
// } else {
//   console.log("Please guess a number between 1 and 10");
// }

// LOGICAL OR OPERATOR- ||: one side must be true
let age = 78;

if (age < 6 || age >= 65) {
  console.log("You get in for free")
} else {
  console.log("You must pay")
}

let color = 'purple';

if (color === 'purple' || color === 'lilac' || color === 'violet') {
  console.log("Great Choice")
}

// SWITCH STATMENT- compare a value to multiple cases
let day = 3;

switch(day) {
  case 1:
    console.log("MONDAY");
    break;
  case 2:
    console.log("TUESDAY");
    break;
  case 3:
    console.log("WEDNESDAY");
    break;
  case 4:
    console.log("THURSDAY");
    break;
  case 5:
    console.log("FRIDAY");
    break;
  case 6:
    console.log("SATURDAY");
    break;
  case 7:
    console.log("SUNDAY");
    break;
}

// Ternary Operator- short simple if statements
// condition ? expression if true : expression if false

let num = 7;
num === 7 ? console.log("Lucky") : console.log("Bad");

// if (num === 7) {
//   console.log("Lucky")
// } else {
//   console.log("Bad")
// }

let status = "online";

let newColor = status === 'offline' ? 'red' : 'green';
console.log(newColor)
