// add a function onto an object

// const add = function(x,y) {
//   return x + y;
// }

// add a function into object and call it with dot notation - now called a METHOD
const math = {
  numbers: [1, 2, 3, 4],
  add: function(x,y) {
    return x + y
  },
  multiply: function(x,y) {
    return x * y
  },
  square: function(x) {
    return x * x
  }
}
