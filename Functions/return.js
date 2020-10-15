// Return a function from another function, like function factories

function multiplyBy(num) {
  return function(x) {
    return x * num;
  }
}
// returns a function, need to store in a variable and then use variable name to call function
const triple = multiplyBy(3);
triple(5); // 5 * 3;
const double = multiplyBy(2);
double(10);

function makeBetweenFunc(num1, num2) {
  return function(num) {
    return num >= num1 && num <= num2;
  }
}

const isChild = makeBetweenFunc(0,18);
isChild(5);

const isNineties = makeBetweenFunc(1990, 2000);
isNineties(1992);
