/*
ARRAY METHODS
concat - merge arrays
includes - looks for a value in array returns true of false
indexOf - like str.indexOf, returns the index of an item
join - creates a string from an array
reverse - reverses the array
slice - copy portion of array
splice - remove/replace elements
sort - sorts an array
*/

// CONCAT - merge array
let fruits = ['apple', 'banana'];
let veggies = ['asparagus', 'brussel sprouts'];
let meats = ['steak', 'chicken breast'];

console.log(fruits.concat(veggies));

let allFoods = fruits.concat(veggies, meats);
console.log(allFoods);

// INCLUDES
let ingredients = [
  'water',
  'corn starch',
  'flour',
  'cheese',
  'brown sugar',
  'shrimp',
  'eel'
]

ingredients.includes('fish') // false
ingredients.includes('water')  // true

if (ingredients.includes('flour')) {
  console.log('I am gluten free');
}

ingredients.indexOf('eel');
ingredients.indexOf('flour') !== -1 // means flour is in array


// REVERSE - reverses original array, mutates array
let letters = ['T', 'C', 'E', 'P', 'R'];
console.log(letters.reverse());

// JOIN - takes an array and turns into a string
let elements = ['fire', 'air', 'water']
elements.join();

// SLICE - does not include the end index, cuts out a portion of array

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']

console.log(animals)

let swimmers = animals.slice(0, 3);
let mammals = animals.slice(2, 4);
let reptiles = animals.slice(4, 6);

// pass in negative index, will work backwards from end of array
let quadruped = animals.slice(-3); // gives last three items

animals.slice() // makes copy of entire array

// SPLICE - changes the contents of an array by removing or replacing existing elements
// array.splice(start, deleteCount)

// ==================
// INSERTING W/ SPLICE
// ==================
// 'at index 1, delete 0 items and insert 'octopus
animals.splice(1, 0, 'octopus');  // insert values, returns []
console.log(animals)

// ===================
// DELETING W/ SPLICE
// ===================
// at index 3, delete 2 items
animals.splice(5, 2) // delete whale and bear, returns items you are deleting ['whale', 'bear']

// ===================
// REPLACING WITH SPLICE
// ===================
// at index 3, delete 2 items and replace them with 'orca' and 'grizzly'
animals.splice(3 ,2, 'orca', 'grizzly')

// SORT - sorts items in an array
let women = ['Mrs. Robinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne']


