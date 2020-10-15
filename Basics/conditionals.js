if (1 !== 1) {
  console.log('its true');
}

// Example 2
// let rating = 3;

// if (rating === 3) {
//   console.log("You are a superstar!");
// }

// Example 3
let num = 37;

if (num % 2 !== 0) {
  console.log('ODD NUMBER');
}

// Performance Review
let rating = 2

if (rating === 3) {
  console.log("You are a superstar!");
} else if (rating === 2) {
  console.log("Meets expectations")
} else if (rating === 1) {
  console.log("Needs Improvement")
} else {
  console.log("wtf?")
}

// Example
let highScore = 1430;
let userScore = 1200;

if (userScore >= highScore) {
  console.log(`Congrats, you have the new high score of ${userScore}`);
  highScore = userScore;
} else {
  console.log(`Good game. Your score of ${userScore} did not beat the score of ${highScore}`)
}

// Nested Conditionals
let password = "kitty";

if (password.length >= 6) {
  if (password.indexOf(' ') !== -1) {
    console.log("Password cannot have spaces")
  } else {
    console.log("Valid Password")
  }
} else {
  console.log("password must be longer")
}
