// const allLis = document.querySelectorAll('li');

// // use for...of loop to iterate over array like HTMLCollection object
// for (let li of allLis) {
//   console.log(li.innerText);
//   li.innerText = 'WE ARE THE CHAMPIONS!'
// }

const todo = document.querySelector('#todos .todo');

const newImg = document.createElement('img')
newImg.src = 'https://images.unsplash.com/photo-1603536764976-e2d8a6d805fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';
newImg.style.width = '300px'

document.body.appendChild(newImg)

const newLink = document.createElement('a')
newLink.innerText = 'Wow vs. FFXIV'
newLink.href = 'https://www.youtube.com/watch?v=7boLw-HmKUo';

const firstP = document.querySelector('p');
firstP.appendChild(newLink)
