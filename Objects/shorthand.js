// const getStats =  (arr) => {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   const sum = arr.reduce((sum, r) => sum + r);
//   const avg = sum / arr.length;
//   return {
//     max: max,
//     min: min,
//     sum: sum,
//     avg: avg
//   }
// }

// shorthand syntax
const getStats =  (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;
  return {
    max,
    min,
    sum,
    avg
  }
}

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

const stats = getStats(reviews);

// COMPUTED PROPERTIES
const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = "James Cameron"
// const team = {};
// team[role] = person;
// team[role2] = person2;

// able to insert the value of a variable as the key name direclty when creating an object
const team = {
  [role]: person,
  [role2]: person2
}

function addProp(obj, k, v) {
  const copy = {
    ...obj
  }
  copy[k] = v;
  return copy;
}

function addProp2(obj, k, v) {
  return {
    ...obj,
    [k]: v
  }
}

const res = addProp(team, 'happy', ':)');
const response2 = addProp2(team, 'Publicist', 'Jodie')

