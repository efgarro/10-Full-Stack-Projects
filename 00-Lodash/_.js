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

    pad(strToPad, strLen) {
        let padChars = strLen - strToPad.length;
        if (padChars <= 0) {
            return strToPad;
        }
        let padB = Math.floor(padChars / 2);
        let padE = padChars - padB;
        return ' '.repeat(padB) + strToPad + ' '.repeat(padE);
    },

    has(obj, key) {
        if (obj.hasOwnProperty(key) && obj.key !== undefined) {
            return true;
        } else {
            return false;
        }
    }, 

    invert(obj) {
        const newObj = {};
        for (let key in obj) {      
            newObj[obj[key]] = key;
        }
        return newObj;

    },

    findKey(obj, pfunc) {
        for (let key in obj) {
            if (pfunc(obj[key])) {
                return key;
            }
        }
        return undefined;  
    },

    drop(arr, num = 1) {
        return arr.slice(num);
    },

    dropWhile(arr, pfunc) {
        
    }


};


// Do not write or modify code below this line.
module.exports = _;