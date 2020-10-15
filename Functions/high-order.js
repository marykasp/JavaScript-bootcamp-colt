function add(x, y) {
  return x + y;
}

const subtract = function(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

const divide = function (x, y) {
  return x / y;
}

// loop over each item and call function
const operations = [add, subtract, multiply, divide];

for(let func of operations) {
  let result = func(30, 5);
  console.log(result)
}

for(let func of operations) {
  let name = func;
  console.log(name)
}


const thing = {
  doSomething: multiply
}

// HIGHER ORDER FUNCTIONS - functions that operate on/with other functions
// accept other functions as arguments, return a function
// first-class function- treated like any other value- stored in variables, passed to arguments as functions, returned from functions

function callTwice(func) {
  func();
  func();
}

function laugh() {
  console.log('HAHAHA')
}

function cry() {
  console.log(`CRY BABY CRY!`);
}

function repeatNTimes(action, num) {
  for(let i = 0; i < num; i++) {
    action();
  }
}

repeatNTimes(laugh, 13);

function pickOne(f1, f2) {
  let randomNum = Math.random();
  console.log(randomNum);
  if (randomNum < 0.5) {
    f1();
  } else {
    f2();
  }
}

pickOne(laugh, cry);
