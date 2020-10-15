// ARRAYS ordered collection of values- can be any data type

let shoppingList = ['cereal', 'cheese', 'milk'];
shoppingList[0] = 'dog food';

// Add to end using .length property
shoppingList[shoppingList.length] = "ice cream";
console.log(shoppingList);

let lotto = [45, 12, 23, 25, 34];

let myCollection = [12, 'dog', true, null, NaN];
console.log(myCollection)

new Array(1,2,3,4,5) // creates an empty array

// ADDING AND REMOVING FROM ARRAY
let topSongs = [
  'First TIme Ever Saw Your Face',
  'God Only Knows',
  'A Day In the Life',
  'Life On Mars'
]


topSongs.push('Fortunate Son') // returns new array length
console.log(topSongs);

topSongs.pop() // removes last item from list and returns that item
console.log(topSongs);


// SHIFT AND UNSHIFT
// SHIFT - removes from beginning of array
// UNSHIFT - adds item to beginning
topSongs.shift();


