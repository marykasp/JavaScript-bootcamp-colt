// Spread - allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected
// or an object expression to be expanded in places where zero or more key-value pairs (object literals) are expected

// spread in a function call, array literals, and object literals - expanding an iterable

// FUNCTION CALLS - spreading out arguments, such as passing an array in as an argument
const nums = [9, 5, 3, 6, 11];
Math.max(...nums) // expands each element in the array into a seperate item passed in

function giveMeFour(a, b, c, d) {
  console.log('a', a);
  console.log('b', b);
  console.log('c', c);
  console.log('d', d)
}

const colors = ['red', 'orange', 'yellow', 'green'];

giveMeFour(colors) // will return full array and then undefined
giveMeFour(...colors) // will pass in each element as an argument to the function call (spread operator)

// spread is not usually used to spread out the characters in a string but it works
const str = 'GOAT';
giveMeFour(...str)

// ARRAY LITERALS - create a new array using an existing array, spreads elements from one array to another
const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];
const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];
const cnidaria = ['fire coral', 'moon jelly'];

const mollusca = [...cephalopods, ...gastropods];
console.log(mollusca)

const inverts = [...cnidaria, ...gastropods, ...cephalopods];

// can use spread operator to make a copy of an array, will create a new array in memory, different ref areas
const cephCopy = [...cephalopods];

// OBJECT LITERALS - copies properties from one object to another
const feline = {
  legs: 4,
  family: 'Felidae'
}

const canine = {
  family: 'Caninae',
  furry: true,
  legs: 4
}

const dog = {
  ...canine,
  isPet: true,
  adorable: true
}

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: 'unpredictable'
}

const catDog = {
  ...canine,
  ...feline
}

// use to create a copy of object - don't have same reference, won't clone nested objects/arrays
const catDogClone = {
  ...catDog
}
// can only spread an object inside an object, can't do it inside an array

// const random = [...'hello', ...catDog] // will give an error needs to be in an object literal {}
// const random2 = [...'goodbye', {
//   ...catDog
// }];
