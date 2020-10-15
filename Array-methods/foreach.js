const numbers = [20, 21, 22, 23, 24, 25, 26];

// Array forEach method takes a callback function as its argument
// the anonymous function is called on each item in the array
// the value of the item is passed in as the callbacks argument
numbers.forEach(function(num) {
  console.log(num * 2)
})

function printTriple(n) {
  console.log(n * 3);
}

numbers.forEach(printTriple);

// forEach can also use second parameter of the index of the element
numbers.forEach(function(num, i) {
  console.log(i, num);
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

// each item  in the books array is an object - print each title
// book parameter represents each object in the books array
books.forEach(function (book) {
  // console.log(obj)
  console.log(book.title.toUpperCase())
})

// another way to loop through the items in an array - a function is not being called, just a block is on each item
for (let book of books) {
  console.log(book.title)
}

// old way of looping through each element in an array
// for(let i = 0; i < books.length; i++) {
//   console.log(books[i].title)
// }

