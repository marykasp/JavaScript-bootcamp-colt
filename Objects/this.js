// added as a method to Window object in browser (part of the global scope)
// Window is the global scope object in the browser
function sayHi() {
  console.log('Hi');
  console.log(this)
}

// this is a reference to an object - object represents current execution scope
const greet = function() {
  console.log(this)
}

// write a method that is aware of the object it lives in using the this keyword- will reference the object it is built in
const person = {
  firstName: 'Cherilyn',
  lastName: 'Sarkisian',
  nickName: 'Cher',
  fullName() {
    // this points to an object in current scope - so would point to person object
    // console.log(this)
    // console.log(this.firstName);
    // destructing object- taking out the values of the object key properties
    const {
      firstName,
      lastName,
      nickName
    } = this;
    return `${firstName} ${lastName} AKA ${nickName}`
  },
  printBio() {
    const fullName = this.fullName();
    console.log(`${fullName} is a person.`)
  }
}
