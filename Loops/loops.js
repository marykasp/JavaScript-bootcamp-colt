// LOOPS - repeating code until a specified condition is met

// print hello 10 times
for (let i = 0; i < 10; i++) {
  console.log('hello', i)
}

// generate perfect squares
for (let i = 1; i <= 20; i++) {
  console.log(`${i} x ${i} = ${i * i}`)
}

// for (let i = 50; i >= 0; i -= 10) {
//   console.log(i)
// }
// iterate over array and sum all numbers
let animals = ['lions', 'tigers', 'bears'];

for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i])
}

let examScores = [98, 77, 84, 91, 57, 66];

for (let i = 0; i < examScores.length; i++) {
  console.log(examScores[i], `index: ${i}`)
}

const students = [
  {
    firstName: 'Zeus',
    grade: 98
  },
  {
    firstName: 'Artemis',
    grade: 77
  },
  {
    firstName: 'Hera',
    grade: 72
  },
  {
    firstName: 'Apollo',
    grade: 90
  }
]

for (let i = 0; i < students.length; i++) {
  console.log(`${students[i].firstName} scored ${students[i]['grade']}`)
}

// average all the grades
// have to declare variable outside of loop because if inside the loop for each iteration it would reassign the value of sum to 0
let sum = 0;
for (let i = 0; i < students.length; i++) {
  sum += students[i].grade
}

// average of the student scores in the students array - loop through array and sum the grades of each student
console.log(sum / students.length)

const word = 'stressed';
let reversedWord = '';
for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i]
}

console.log(reversedWord)

// NESTED LOOPs
for(let i = 1; i <= 10; i++) {
  console.log('Outer Loop:', i);
  for (let j = 10; j >= 0; j -= 2) {
    console.log('  Inner Loop:', j)
  }
}

let gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8,32,16,4],
  [8, 8, 4, 2]
]

let totalScore = 0;

// used nested for loops when you have nested arrays
for (let i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i];
  console.log(row)
  for (let j = 0; j < row.length; j++) {
    totalScore += row[j]
  }
}

console.log(totalScore)
