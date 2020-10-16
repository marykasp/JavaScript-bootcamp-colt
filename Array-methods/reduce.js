// REDUCE method - executes a reducer function on each element - resulting in a single value
// summing an array is an example of when to use reduce, finding a maximum value in array, talling data in array

const nums = [3, 5, 7, 9, 11];

// variable stores sum of all the numbers
const sumOfNums = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
})

const product = nums.reduce((total, currentValue) => {
  return total * currentValue;
})

// don't have to accumulating a value through math, can use it to find max value in array
const grades = [87, 64, 96, 78, 88, 99, 73, 70, 64];
// const topScore = grades.reduce((max, currentValue) => {
//   if (currentValue > max) return currentValue;
//   return max;
// })

const maxGrade = grades.reduce((max, currentValue) => {
  return Math.max(max, currentValue)
})

const minGrade = grades.reduce((min, currentValue) => {
  return Math.min(min, currentValue)
})

// specify an initial value - reduce can take a callback function as a parameter and an initial value
const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n',' y'];

// initial value will be an empty object
// const tally = votes.reduce((tally, vote) => {
//   if(tally[vote]) {
//     tally[vote]++;
//   } else {
//     tally[vote] = 1;
//   }
// }, {});

const results = votes.reduce((tally, vote) => {
  tally[vote] = (tally[vote] || 0) + 1;
  return tally;
}, {});

// {}
// {y: 1}
