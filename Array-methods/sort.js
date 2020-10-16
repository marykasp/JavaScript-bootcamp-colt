const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

// sort on its own coerces values to strings and sorts based off on strings
prices.sort(); // mutates the caller

// array.sort(compareFunction(a, b)) - if returns less than 0 sort a before b, if returns 0, leave a and b unchanged, if returns greater than 0 sort b before a
const ascSort = prices.slice().sort((a,b) => a - b)
const descSort = prices.sort((a, b) => b - a);

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
// sort books by rating - from low to high rating (ascending)
books.sort((a, b) => a.rating - b.rating)
