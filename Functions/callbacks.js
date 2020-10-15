// function passed into another function and called inside that function
// function called within outer function.

// a function passed into another function and called inside that function is known as a callback
// normally pass in an anonymous function rather than a declared/named function

// passing in an anonymous function (callback f(x))
setTimeout(function() {
  console.log("Hello")
}, 5000) // runs a block of code after a certain number of ms


function laugh() {
  console.log("HAHAHA")
}
// passing in a Named function
setTimeout(laugh, 5000)

// selects button tag in HTML
const btn = document.querySelector('button');
btn.addEventListener('click', function() {
  alert("WHY DID YOU CLICK ME?")
})
