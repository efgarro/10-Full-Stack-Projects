let _ = {
    clamp(number, lowerBound, upperBound) { 
      if (number >= lowerBound && number <= upperBound) {
        return number;
      } else if (number < lowerBound) {
        number = lowerBound;
        return number;
      } else if (number > upperBound) {
        number = upperBound;
        return number;
      }
    }
}




// Do not write or modify code below this line.
module.exports = _;