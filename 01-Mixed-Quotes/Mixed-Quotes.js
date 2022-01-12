
// Creates a Random number
const createRandomNumber = (num) => {
    return Math.floor(Math.random() * num)
} 

// Array of Objects with real Quotes
const realQuotes = [
    { 
    quote:  "A adj noun has no fixed plans and is not intent on arriving.",
    philosopher: "Lao Tzu",
    realNoun: "traveler",
    realAdj: "good"
    }, {
    quote:  "Whatever noun you are, be a adj one.",
    philosopher: "Abraham Lincoln",
    realNoun: "",
    realAdj: "good"
    }, {
    quote:  "I fear not the noun who has practiced 10,000 kicks once, but I fear the adj noun who has practiced one kick 10,000 times.",
    philosopher: "Bruce Lee",
    realNoun: "man",
    realAdj: ""
    }, {
    quote:  "Any noun can write code that a computer can understand, adj programmers write code that humans can understand.",
    philosopher: "Martin Fowler",
    realNoun: "fool",
    realAdj: "good"
    }
]; 
let qIndex = createRandomNumber(realQuotes.length)
let quoteSplit = realQuotes[qIndex].quote.split(" ")

// Created Impostor's Quote
const createWicketQuote = (arr) => {
    const madLibNounArr = ["charlatan", "scapegoat", "cookie monster", "lapdog", 
    "phony"];
    const madLibAdjArr = ["burned-out", "bloodthristy", "thunderous", 
    "fictitious"];
    const impostorArr = ["Big Brother", "Hannibal Lecter", "Nurse Ratchet", 
    "Mr. Hyde", "The Grand Witch", "He Monomaniac", "She Psycho"];
    let madLibNoun = madLibNounArr[createRandomNumber(madLibNounArr.length)]
    let madLibAdj = madLibAdjArr[createRandomNumber(madLibAdjArr.length)]
    let impostor = impostorArr[createRandomNumber(impostorArr.length)]
    let quoteArr = arr.slice()
    let wicketQuote = ""
    for (let i = 0; i < quoteArr.length; i++) {
        if (quoteArr[i] === "noun") {
          // console.log("I passed this")
          quoteArr.splice(i, 1, madLibNoun)
        } else if (arr[i] === "adj") {
          quoteArr.splice(i, 1, madLibAdj)   
        }
    }
    wicketQuote = quoteArr.join(" ")
    console.log("\n\n" + wicketQuote)
    console.log(impostor)
}

// Prints out delayed alert
const delayedAlert = () => {
    let timeoutID = setTimeout(slowAlert, 6000);
  }

const slowAlert = () => {
    console.log("\nOh no! Beware of the previous quote, it has been wrecked by a Wicked Impostor!");
    console.log("...here's the real thing:")
  }

// Reconstructs the Real Quote
const reconstructRealQuote = (arr) => { 
    let quoteArr = arr.slice()
    let reconQuote = ""
    for (let i = 0; i < quoteArr.length; i++) {
        if (quoteArr[i] === "noun") {
          // console.log("\n")
          quoteArr.splice(i, 1, realQuotes[qIndex].realNoun)
        } else if (quoteArr[i] === "adj") {
          quoteArr.splice(i, 1, realQuotes[qIndex].realAdj)   
        }
    }
    reconQuote = quoteArr.join(" ")
    console.log("\n" + reconQuote)
    console.log(realQuotes[qIndex].philosopher + "\n\n")
}

// Executes Functions
createWicketQuote(quoteSplit)
delayedAlert()
let timeoutID = setTimeout(reconstructRealQuote, 12000, quoteSplit)