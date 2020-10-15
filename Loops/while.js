// while some condition is true, run code. loops through code until a condition is met

for (let i = 0; i <= 5; i++) {
  console.log(i)
}

let j = 0;
while (j <= 5) {
  console.log(j);
  j += 1;
}

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}

console.log(`Target: ${target} Guess: ${guess}`)

// iterate over iterable- arrays, strings using for..of
// for (variable of iterable) { statement }

let subreddits = ['soccer', 'popheads', 'cringe', 'books'];

for (let sub of subreddits) {
  console.log(sub);
}

const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
]

for (let i = 0; i < magicSquare.length; i++) {
  let row = magicSquare[i];
  // console.log(row)
  let sum = 0;
  for (let j = 0; j < row.length; j++) {
    sum += row[j]
  }
  console.log(`${row} summed to ${sum}`)
}

// For...Of wants an iterable like an array
// use for..of syntax - element of array
for (let row of magicSquare) {
  console.log(row);
  let sum = 0;
  for (let num of row) {
    // console.log(num)
    sum += num
  }
  console.log(`${row} summed to ${sum}`)
}

// when you need to have the index use normal for loop, when you don't need the index of an element you can use for..of loop

const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  'In Bruges': 9,
  Amadeus: 10,
  'Kill Bill': 8,
  'Little Miss Sunshine': 8.5,
  Coraline: 7.5
}

// objects are not iterable like arrays and strings- use Object.keys(obj) to get an array of the keys
for (let movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie]);
}

const ratings = Object.values(movieReviews);

let total = 0;
for (let rating of ratings) {
  total += rating;
}

let averageRating = total / ratings.length

console.log('Average Rating:', averageRating)

// Object.keys(obj) - loops over the keys in an object puts the keys in an array
// Object.values(obj) - loops over the values in an object puts them in an array

// For..In Loops
// for (variable in obect) { statement }
const jeopardyWinnings = {
  regularPlay: 2522700,
  watsonChallenge: 300000,
  tournamentOfChampions: 500000,
  battleOfTheDecades: 1000000
}

let totalWinnings = 0;

for (let prop in jeopardyWinnings) {
  totalWinnings += jeopardyWinnings[prop];
  console.log(prop);
  console.log(jeopardyWinnings[prop])
}

console.log(`Total Earnings: ${totalWinnings}`);
