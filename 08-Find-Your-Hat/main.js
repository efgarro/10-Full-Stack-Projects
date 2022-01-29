const prompt = require("prompt-sync")({ sigint: true });
const { Field } = require("./1-fyhClass");

let anArray = Field.generateField();
const myField = new Field(anArray);
myField.playFYH();

