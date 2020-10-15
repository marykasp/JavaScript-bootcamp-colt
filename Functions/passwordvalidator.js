// Write a isValidPassword function
// It accepts 2 arguments: password and usernmae
// password must be: at least 8 characters, cannot contain spaces and cannot contain username
// if all requirements are met, return true
// otherwise false

function isValidPassword(password, username) {
  if ( password.length < 8 || password.indexOf(' ') !== -1 || password.indexOf(username) !== -1
  ) {
    return false;
  }
  return true
}

function average(array) {
  let sum = 0;
  for (let num of array) {
    sum += num
  }

  let result = sum / array.length;
  console.log(`Average: ${result}`)
  // return sum / number of elements in array
  return result;
}

