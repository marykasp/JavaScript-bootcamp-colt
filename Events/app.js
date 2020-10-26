// the thing     event type    code to run
// button        click           change the color
// input         hits return         get search results

// ******* Key Events
const input = document.querySelector('#username');
input.addEventListener('keydown', function(event) {
  console.log('KEY DOWN!')
})

input.addEventListener('keyup', function(event) {
  console.log('KEY UP!')
})

const addItemInput = document.querySelector('#addItem');
const itemsUl = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(event) {
  if(event.key === 'Enter') {
    if(!this.value) return;
    // add a new item to list
    // get value of input field save in a variable
    const newItemText = this.value;
    // create a new list element
    const newItem = document.createElement('li');
    // add input value as inner text to new li
    newItem.innerText = newItemText;
    // append new list item with text to ul element
    itemsUl.appendChild(newItem)

  }
})

// keypress needs to be a character showing up in input or a change
input.addEventListener('keypress', function(event) {
  console.log('KEY PRESS!')
})

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'indigo', 'violet', 'pink'];


// ********** Function that changes the color of the h1 text when each box is clicked
// function expression
// changeColor passed an event object without having a parameter
const changeColor = function(event) {
  // refers to individual div that is clicked
  console.log(this);
  // contains information about the particular event that occurs (click in this case)
  console.log(event);

  const h1 = document.querySelector('h1');
  // set h1 text color to be the color of the div box clicked on
  h1.style.color = this.style.backgroundColor;

}


const container = document.querySelector('#boxes');

for(let color of colors) {
  const box = document.createElement('div');
  box.style.backgroundColor = color;
  box.classList.add('box');
  // append box to container element- section
  container.appendChild(box);

  // this will refer to object that calls the method, in this case the box element is the object
  box.addEventListener('click', changeColor)
}

// ***** Examining the event object with keypress event type, property that is the value of the key that was pressed
// document.body.addEventListener('keypress', function(event) {
//   console.log(event);
// })

const btn = document.querySelector('#clicker')

// ************* Using addEventListner method, adding multiple events to button element
// btn.addEventListener('click', function() {
//   alert('CLICKED')
// })

// btn.addEventListener('click', function() {
//   console.log('SECOND CLICK')
// })

// btn.addEventListener('mouseover', function() {
//   btn.innerText = 'Stop touching me'
// })

// btn.addEventListener('mouseout', function() {
//   btn.innerText = 'Click Me!'
// })

// ****** Setting onclick property, so can be overriden
// btn.onclick = function() {
//   console.log('You clicked me')
// }




