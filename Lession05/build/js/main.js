"use strict";
// Convert to more or less specific
let a = "helo";
let b = a;
let c = a;
let d = "Hello world!";
let e = "Home";
let addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
};
const myVal = addOrConcat(2, 2, "concat");
//Becareful! TS sees no problem - but a string is returned,
const nextVal = addOrConcat(2, 2, "concat");
// 10 as string
10;
const img = document.querySelector("img");
const myImg = document.getElementById("myImg");
const nextImg = document.getElementById("nextImg");
img.src;
