// every method returns a boolean value, tests whether all elements in the array pass a provided function
// callback function must return a boolean value
// way to check if every element passes a certain condition

const words = ['dog', 'dig', 'log', 'bag', 'wag'];

words.every(word => {
  return word.length === 3;
})

words.every(word => word[0] === 'd');

const result = words.every(word => {
  let lastLetter = word[word.length - 1]
  return lastLetter === 'g'
})

words.some(word => word[0] === 'd')

const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fantasy', 'short stories']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['nonfiction']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.75,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the Flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction', 'dystopian']
  }
]

const allGoodBooks = books.every(book => book.rating > 3.5)
const any2Authors = books.some(book => book.authors.length === 2)
