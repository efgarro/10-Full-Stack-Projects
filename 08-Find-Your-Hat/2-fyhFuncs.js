const prompt = require("prompt-sync")({ sigint: true });

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)) + 1;
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    // console.log(array);
    return array;
}



const newPos = (move, prevPos) => {
    switch (move) {
        case "r":
        case "R":
            console.log("Oranges are $0.59 a pound.");
            break;
        case "l":
        case "L":
            console.log("heoll");
            break;
        case "u":
        case "U":
            console.log("Mangoes and papayas are $2.79 a pound.");
            // expected output: "Mangoes and papayas are $2.79 a pound."
            break;
        case "d":
        case "D":
            console.log("Ohhh Mangoes and papayas are $2.79 a pound.");
            break;
        default:
            console.log(`Sorry, we are out of ${expr}.`);
    }
};

const genFieldArr = () => {};

let anArray = genFieldArr();

// console.log(`These ${n} many times`);

module.exports = { shuffleArray, newPos };
