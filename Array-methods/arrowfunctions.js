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

const squareEven = n => (
  if (n < 0) {
    return false;
  }
  n * n;
)
