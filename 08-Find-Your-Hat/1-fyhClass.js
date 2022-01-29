const prompt = require("prompt-sync")({ sigint: true });

class Field {
    constructor(twoDArr) {
        this.twoDArr = twoDArr;
        this.alive = true;
        this.row = 0;
        this.col = 0;
    }
    print() {
        this.twoDArr.forEach((element) => {
            let str = element.join("");
            console.log(str);
        });
    }

    playFYH() {
        this.print();

        do {
            const mve = prompt("Please enter your move: ");
            switch (mve) {
                case "r":
                case "R":
                    this.row++;
                    break;
                case "l":
                case "L":
                    this.row--;
                    break;
                case "u":
                case "U":
                    this.col--;
                    break;
                case "d":
                case "D":
                    this.col++;
                    break;
                default:
                    console.log(`Sorry, wrong choice!`);
            }
            if (
                this.row < 0 ||
                this.row > this.twoDArr[0].length - 1 ||
                this.col < 0 ||
                this.col > this.twoDArr.length - 1
            ) {
                console.log("Player is out of range!");
                this.alive = false;
            } else if (this.twoDArr[this.col][this.row] == "O") {
                console.log(this.twoDArr[this.col][this.row]);
                console.log("Down the hole!");
                this.alive = false;
            } else if (this.twoDArr[this.col][this.row] == "^") {
                console.log("You are a natural winner!");
                this.alive = false;
            } else {
                this.twoDArr[this.col][this.row] = "*";
                this.print();
            }
        } while (this.alive === true);
    }

    static generateField() {
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

        for (let i = longFieldArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)) + 1;
            const temp = longFieldArr[i];
            longFieldArr[i] = longFieldArr[j];
            longFieldArr[j] = temp;
        }

        const boxedFieldArr = [];
        for (let s = 0; s < spaces; s += w) {
            boxedFieldArr.push(longFieldArr.slice(s, s + w));
        }
        return boxedFieldArr;
    }
}

module.exports = { Field };
