// Test Score example
let score = 98

if (score >= 90) {
  console.log("YOU GET AN A!");
  if (score >= 98) {
    console.log("EXTRA CONGRATS, YOU GET AN A+!");
  }
} else if (score >= 80) {
  console.log("YOU GET A B!");
} else if (score >= 70) {
  console.log("YOU GET A C!");
} else if (score >= 60) {
  console.log("YOU GET A D!");
} else {
  console.log("YOU DID NOT GET AN F!");
}

// Coin toss example
let randNum = Math.random() // between 0 and 1 (exclusive)

if (randNum < 0.5) {
  console.log("Heads!");
} else {
  console.log("Tails!");
}

// Nesting conditionals inside other conditionals
let password = "cat dog"

if (password.length >= 6) {
  if (password.indexOf(' ') !== -1) {
    console.log("Password cannot contain any spaces");
  } else {
    console.log("Valid password");
  }
} else {
  console.log("Password is too short!");
}

// AND logical operators
let color = "purple";
let animal = "toad";

if (color === 'purple' && animal === 'toad') {
  console.log("YAY PURPLE TOAD!");
} else {
  console.log("BOO NOT A PURPLE TOAD!");
}

// OR Logigal Operator
let age = 5;

if (age < 8 || age >= 65) {
  console.log("YOU GET IN FOR FREE!")
} else {
  console.log("YOU HAVE TO PAY $10")
}
