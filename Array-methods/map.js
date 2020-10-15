// creates a new array from an existing array- modify each element of an array, or make copy of the original

// accepts a callback, calls that function with each element, builds a new array

const texts = ['rofl', 'lol', 'omg'];

const caps = texts.map(function(text) {
  return text.toUpperCase();
})

console.log(caps);

const numbers = [20,21,22,23,24,25,26,27];
const words = ['asap', 'byob', 'rsvp', 'diy'];

const doubles = numbers.map(function(num) {
  return num * 2
})

console.log(numbers); // numbers is unchanged, map does not mutate the caller
console.log(doubles); // new array map returned stored in doubles variable

const numDetail = numbers.map(function(num) {
  return {
    value: num,
    isEven: num % 2 === 0
  }
})

console.log(numDetail);

// ----- FOR...OF ---------
// same thing as map, iterating over each element, modify it, push new value into a new array
let doubles2 = [];
for(let num of numbers) {
  doubles2.push(num * 2);
}


// array of each string all caps and separated by periods
const abbrevs = words.map(function(word) {
  return word.toUpperCase().split().join('.')
})


const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
  }
]

// new array with book titles - creating a new array of strings
const bookTitles = books.map(function(book) {
  return book.title.toUpperCase();
})
