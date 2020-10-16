// alternative way to write a function - more compact than a function expression
// don't have to write function keyword - more clean syntax
// act differently than function expressions in relation to keyword this

const sum = (x, y) => {
  return x + y;
}

// Function Expression
// const square2 = function(x) {
//   return x * x
// }

// // Arrow function that does the same task
// const square = (x) => {
//   return x * x;
// }

const isEven = function(num) {
  return num % 2 === 0;
}

const isEven2 = (num) => {
  return num % 2 === 0;
}

const multiply = (x, y) => {
  return x * y;
}

// IMPLICIT RETURN - don't have to write the return keyword itself, one line expressions
const square = n => n * n

const nums = [1, 2, 3, 4, 5, 6, 7];

// anonymous function
const doubles1 = nums.map(function (n) {
  return n * 2;
})

// arrow function
const doubles2 = nums.map(n => {
  return n * 2
})

// arrow function with implicit return
const doubles3 = nums.map(n => n * 2)

const parityList = nums.map(function(n) {
  if (n % 2 === 0) return 'even';
  return 'odd';
})

// if-else statment to ternary operator to be one line expression can use implicit return
const parityList2 = nums.map(n => n % 2 === 0 ? 'even' : 'odd')
