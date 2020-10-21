

function makeDeck() {
  const deck = [];
  const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
  // store values as a string
  const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';

  // split method converts a string into an array of values
  for(let value of values.split(',')) {
    for (let suit of suits) {
      deck.push({
        value,
        suit
      })
    }
  }
  return deck
}

function drawCard(deck) {
  // pops off a card from the deck array, returns an element in the deck array, card object
  return deck.pop()
}

// store deck in a varaible
// const myDeck = makeDeck();
// // draw a random card from the deck
// const card1 = drawCard(myDeck)

const myDeck = {
  deck: [],
  drawnCards: [],
  suits: ['hearts', 'diamonds', 'spades', 'clubs'],
  values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
  // method that updates the deck property
  initializeDeck() {
    const {suits, values, deck} = this
    for(let value of values.split(',')) {
      for (let suit of suits) {
        deck.push({
          value,
          suit
        })
      }
    }
    // don't need to return the deck since it is now a property of the object
  },
  drawCard() {
    // removes a card off the end of the deck property array on this object
    const card = this.deck.pop()
    this.drawnCards.push(card);
    return card;
  },
  drawMultiple(numCards) {
    const cards = [];
    for(let i = 0; i < numCards; i++) {
      cards.push(this.drawCard());
    }
    return cards;
  },
  shuffle() {
    const {deck} = this;
    // loop over array backwards
    for (let i = deck.length - 1; i > 0; i--) {
      // pick random index before current element
      let j = Math.floor(Math.random() * (i + 1));
      // swap elements
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }
}

// shuffle deck of cards
// function shuffle(arr) {
//   // loop over array backwards
//   for (let i = arr.length - 1; i > 0; i--) {
//     // pick random index before current element
//     let j = Math.floor(Math.random() * (i + 1));
//     // swap elements
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     console.log(arr)
//   }
// }
