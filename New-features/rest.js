// looks like spread - collects things down into a single array
// used when want to make functions that accept a variable number of arguments
// arguments object - available inside every function, its an array-like object (has length property), contains all arguments passed to the function, not available inside of arrow functions

console.log("Testing")

function sum() {
  const argsArray = [...arguments]
  // console.log(arguments);
  console.log(argsArray);
  return argsArray.reduce((total, currentValue) => {
    return total + currentValue;
  })
}

console.log(sum(1,2,3));

// will not work since arguments object does not work in arrow functions, will return a ReferenceError
// const multiply = () => {
//   console.log(arguments)
// }

// REST PARAMS - collects all remaining arguments into an actual array not an array like object
function sumAll(...nums) {
  let total = 0;
  for(let n of nums) {
    total += n
  }
  return total;
}

sumAll(1,2,3,4)

// REST PARAMS - used when function is defined, stores multiple arguments that are passed when function is called
// SPREAD OPERATOR - used when function is called to spread an arry passed in as individual items to a function

function fullName(first, last, ...title) {
  console.log('first', first);
  console.log('last', last);
  console.log('titles', title)
}

// works with arrow functions
const multiply = (...nums) => (
  nums.reduce((total, currVal) => total * currVal)
)
