let _ = {
    clamp(num, lBound, uBound) {
        return num < lBound ? lBound
             : num > uBound ? uBound
             : num;
    },

    inRange(num, start = 0, end) {
        if (start > end) {
          [end, start] = [start, end];
        }
        return num < start ? false
             : num > end ? false
             : num == end ? false
             : true
    },

    words (stringToSplit) {
        return stringToSplit.split(' ');
    },

    
};


// Do not write or modify code below this line.
module.exports = _;