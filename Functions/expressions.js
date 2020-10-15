const square = function (num) {
  return num * num;
}

console.log(square(7))

// FUNCTION DECLARATION
function add(x, y) {
  return x + y;
}

// ANONYMOUS FUNCTION EXPRESSION
const sum = function (x, y) {
  return x + y
}

console.log(sum(6,5));

// NAMED FUNCTION EXPRESSION
const product = function multiply(a, b) {
  return a * b
}

// gives information on properties of function object to the console
console.dir(product)
