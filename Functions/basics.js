// function - reusable procedure, block of code containing a set of instructions that can be executed at any time throughout program by calling a function

// FUNCTION DECLARATION SYNTAX:
// function funcName() { // do something }

function rollDice() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}

function throwDice(times) {
  // call another function inside a function
  for (let i = 0; i < times; i++) {
    rollDice()
  }
}

// declare a function that takes arguments - use parameters which acts as a placeholder for the arguments that you pass to the function when you call it
function greet(name) {
  console.log(`Hello ${name}`);
}

// arguments- outside data that you pass to a function that performs a task on that data
function avg(num1, num2) {
  let average = (num1 + num2) / 2
  console.log(`The average of ${num1} and ${num2} is ${average}`)
}


function square(num) {
  console.log(num * num);
}

// multiple parameters - expect multiple arguments to be passed in
// return statement returns a value to the caller and terminates the function. Can store returned value in a variable to be used later in the program
function sum(x, y) {
  return x + y;
}

function containsPurple(arr) {
  for (let color of arr) {
    if (color === 'purple' || color === 'magenta') {
      return true
    }

    return false;
  }
}
