// Default Parameters - values that are used if user does not pass in a value during function call
// Default parameters should come at the end since order matters

function multiply(x, y = 10) {
  return x * y
}

multiply(4);
multiply(5, 12)

const greet = (person, greeting = "hi") => {
  console.log(`${greeting} ${person}!`)
}

greet('Tim');

const blah = (x, y = [1,2,3]) => {
  console.log(x, y)
}

