// A pangram is a sentence that contains every letter of the alphabet "The quick brown fox jumps over the lazy dog"

// write a function called isPangram which checks to see if a given sentence contains every letter of the alphabet

function isPangram(sentence) {
  for (let char of 'abcdefghijklmnopqrstuvwxyz') {
    if (sentence.toLowerCase().indexOf(char) === -1) {
      return false
    }
  }

  return true;
}


