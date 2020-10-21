// DESTRUCTURING - short, clean syntax to 'unpack' values from arrays, properties from objects into distinct variables

const raceResults = [
  'Eluid Kipchoge',
  'Feyisa Lelisa',
  'Galen Rupp',
  'Ghirmay Ghebreslassie',
  'Alphonece Simbu',
  'Jared Ward'
]

// const gold = raceResults[0];
// const silver = raceResults[1];

// unpack values from array in single line - goes into raceResults array and puts in values to indicated variables based on position
const [gold, silver, bronze] = raceResults;

const runner = {
  first: 'Eluid',
  last: 'Kipchoge',
  country: 'Kenya',
  title: 'Elder of the Order of the Golden Heart of Kenya'
}

const {first, last, country, title} = runner;

// can use keys from the object and create a new variable name that stores its value
const {country: nation, title: honorific} = runner;

const response = [
  'HTTP/1.1',
  '200 OK',
  'application/json'
]

function parseResponse([protocol, statusCode, contentType]) {
  console.log(`Status: ${statusCode}`)
}

parseResponse(response)
