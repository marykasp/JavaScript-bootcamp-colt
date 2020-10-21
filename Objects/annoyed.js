const annoyer = {
  phrases: ["literally", "cray cray", "I can't even", "YOLO", "like totally", "Can't stop, won't stop"],
  // get a random element from phrases property
  pickPhrase() {
    // destructing values from keys in this object
    const {phrases} = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx]
  },
  start() {
    // console.log(this.pickPhrase())
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase())
    }, 3000)
  },
  stop() {
    clearInterval(this.timerId);
    console.log("PHEW thank heavens that is over")
  }
}


