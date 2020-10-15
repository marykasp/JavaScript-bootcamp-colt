// OBJECT - collection of key-value pairs, retrieve values by their key. Not ordered like arrays
// in Python objects are called dictionaries, in Ruby they are called Hashes

const fitbitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: '5 of 7',
  avgGoodSleep: '2:13',
  45: 'forty five'
}

// all keys are converted to strings
const numbers = {
  100: 'one hundred',
  16: 'sixteen',
  '76 tombones': 'great song'
}

// Square Brackets - use when you have a key stored in a variable or when using numbers as keys. Use when key name is not valid as an identifier: numbers or sting with spaces or when using a variable to store a key string
numbers[100] // returns value

const userReviews = {};

// add a key value pair to the object
userReviews.queenBee49 = 4.5;
userReviews['alserina'] = 5.5;

const student = {
  firstName: 'David',
  lastName: 'Jones',
  strengths: ['music', 'art'],
  exams: {
    midterm: 92,
    final: 88,
  },
}

const average = (student.exams.midterm + student.exams.final) / 2;

const shoppingCart = [
  {
    product: 'Jenga',
    price: 6.88,
    quantity: 1
  },
  {
    product: 'eye cream',
    price: 10,
    quantity: 1,
  }
]

// variables store location address of arrays so they are not equal when comparing their values unless they point to the same location
let nums = [1, 2, 3];
let mystery = [1, 2, 3];
let moreNums = nums;

let a = 42;
let b = 42;
