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

const genFieldArr = () => {
    const hat = "^";
    const hole = "O";
    const fieldCharacter = "░";
    const pathCharacter = "*";

    const w = parseInt(prompt("Please enter field width: "));
    const h = parseInt(prompt("Please enter field height: "));
    const p = parseInt(prompt("Please suggest percentage of holes: "));

    const spaces = w * h;
    const numHoles = Math.floor((p / 100) * spaces);

    const longFieldArr = [pathCharacter];

    for (let i = 1; i <= numHoles; i++) {
        longFieldArr.push(hole);
    }
    for (let j = 1; j <= spaces - numHoles - 2; j++) {
        longFieldArr.push(fieldCharacter);
    }
    longFieldArr.push(hat);

    shuffleArray(longFieldArr);

    console.log(longFieldArr);

    const boxedFieldArr = [];
    for (let s = 0; s < spaces; s += w) {
        console.log(s);
        console.log(w);
        console.log(s + w);
        console.log(spaces);
        boxedFieldArr.push(longFieldArr.slice(s, s + w));

        // y = [];
        // for (j = 0; j < w; j++) {
        //     y.push(longFieldArr[i + j]);
        // }
        //  console.log(boxedFieldArr);
    }
    console.log(boxedFieldArr);
    return boxedFieldArr;
};

let anArray = genFieldArr();

// console.log(`These ${n} many times`);

// anArray = [
//     "*",
//     "░",
//     "░",
//     "░",
//     "░",
//     "░",
//     "░",
//     "░",
//     "░",
//     "░",
//     "░",
//     "░",
//     "░",
//     "░",
//     "░",
//     "░",
//     "░",
//     "░",
//     "O",
//     "O",
//     "O",
//     "O",
//     "O",
//     "O",
//     "O",
//     "O",
//     "O",
//     "O",
//     "O",
//     "^",
// ];
