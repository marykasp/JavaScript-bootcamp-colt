// filter method creates a new array with all elements that pass the test implemented by the provided function
// if element passes function condition it will be added to new array - condition returns true, element will be added to new array
// write a function that returns true or false, element that evaluates to true will be put into a new array

const nums = [34, 35, 67, 54, 109, 102, 22, 9];

// create a new array with odd values store in odds variable, use arrow function single line
const odds = nums.filter(n => n % 2 === 1);
// create a new array with even values
const evens = nums.filter(n => (
  n % 2 === 0
))

const bigNums = nums.filter(n => n > 50);

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

// search for a book in the books array with rating greater than 4 stars
const highRating = books.filter(book => book.rating > 4.3)
const fantasyBooks = books.filter(book => (
  book.genres.includes('fantasy')
))

const shortForm = books.filter(book => (
  book.genres.includes('short stories') || book.genres.includes('essays')
))

// user searches for a word and filter for look for a book title that includes that word in the books array
const query = 'The';
const results = books.filter(book => {
  const title = book.title.toLowerCase();
  return title.includes(query.toLowerCase());
})
