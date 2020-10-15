// Value Type Variable - primitive data types
// JS stores variables is stored in memory
// actually value is stored in memory

// Reference Types - stores a reference to array or object
// reference string of numbers, memory address
// variable holds a pointer to where array is stored in memory


// const with arrays
// can change the elements in an array but can't change what const references in memory

const city = 'Lisbon';
city = "London" // this will produce an error can't reassign a value to a const variable

// points to/references location of the array in memory. does not store the array itself
const myEggs = ['brown', 'brown'];
myEggs.push('white')
myEggs[0] = 'green'
console.log(myEggs)
