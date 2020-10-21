// the value of this depends on the invocation context of the function it is used in - references the current execution scope
// the way you call a function determines where this points to

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
    console.log(this)
    const fullName = this.fullName();
    console.log(`${fullName} is a person.`)
  },
  laugh: () => {
    // the value of this in an arrow method will point to Window global object
    console.log(this);
    console.log(`${this.nickName} says HAHAHA`)
  }
}

const printBio2 = person.printBio;

// arrow functions do not get their own version of this
