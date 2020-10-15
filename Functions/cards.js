function getCard() {
  let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

  const value = pick(values);

  // pick random card suit
  let cardSuits = ['clubs', 'spades', 'hearts', 'diamonds']
  const suit = pick(cardSuits);

  // return object with information about cart
  return {
    value: value,
    suit: suit
  }
}

function pick(arr) {
  // return random element from arr
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
