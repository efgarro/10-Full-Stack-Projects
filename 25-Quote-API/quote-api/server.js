const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement, getQuotesByPerson } = require("./utils");

const PORT = process.env.PORT || 4000;

app.use(express.static("public"));

app.get("/api/quotes/random", (req, res) => {
  const randomElement = getRandomElement(quotes);
  res.send({ quote: randomElement });
});

app.get("/api/quotes", (req, res) => {
  const person = req.query.person;
  if (!person) {
    res.send({ quotes: [...quotes] });
  } else {
    const quotesBy = getQuotesByPerson(person, quotes);
    res.send({ quotes: quotesBy });
  }
});

app.post("/api/quotes", (req, res) => {
  if (req.query.quote && req.query.person) {
    const newQuote = req.query;
    quotes.push(newQuote);
    console.log(quotes)
    res.send({ quotes: newQuote });
  } else {
    res.status(404).send("Incomplete info");
  }
});

// app.get("/api/quotes", (req, res) => {
//   res.send({ quotes: [...quotes] });
// });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
