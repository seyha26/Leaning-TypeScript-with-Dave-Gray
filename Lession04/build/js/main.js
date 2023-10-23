"use strict";
// Types Aliases
// Literal Types
let myName;
let userName;
userName = "Seyha";
// Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
let substract = function (a, b) {
    return a - b;
};
let multiply = function (a, b) {
    return a * b;
};
logMsg(multiply(2, 3));
// optional paramaters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// defualt params value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// Rest paramaters
const total = (a, ...num) => {
    return a + num.reduce((previous, current) => previous + current);
};
logMsg(total(10, 2, 4));
// Never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinit = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// Type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen!");
};
