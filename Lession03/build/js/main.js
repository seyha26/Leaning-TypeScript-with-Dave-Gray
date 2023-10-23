"use strict";
let stringArr = ["one", "hey", "Seyha"];
let guitars = ["strate", "Les paul", 5150];
let maxedData = ["EVH", 1984, true];
stringArr[0] = "Chheng";
guitars = stringArr;
maxedData = guitars;
let test = [];
let bands = [];
bands.push("Van Halen");
// Tuple
let myTuple = ["Cat", 25, false];
let mixed = ["Panda", 1, true];
myTuple[1] = 42;
// Objects
let myObj;
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Seyha",
    prop2: true,
};
exampleObj.prop1 = "Chheng Seyha";
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "Iv"],
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return "Hello!";
};
console.log(greetGuitarist(jp));
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 0] = "A";
    Grade[Grade["B"] = 1] = "B";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["D"] = 3] = "D";
})(Grade || (Grade = {}));
console.log(Grade.A);
