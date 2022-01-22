const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
    constructor(twoDArr) {}

    print() {

    }

    static generateField() {
        
    }
}

const myField = new Field([
    ["*", "░", "O"],
    ["░", "O", "░"],
    ["░", "^", "░"],
]);
