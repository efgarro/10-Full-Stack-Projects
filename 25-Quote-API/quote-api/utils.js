const getRandomElement = (arr) => {
  if (!Array.isArray(arr)) throw new Error("Expected an array");
  return arr[Math.floor(Math.random() * arr.length)];
};

const getQuotesByPerson = (author, arr) => {
  return arr.filter((quote) => {
    if (quote.person === author) {
      return quote;
    }
  });
};

module.exports = {
  getRandomElement,
  getQuotesByPerson,
};
