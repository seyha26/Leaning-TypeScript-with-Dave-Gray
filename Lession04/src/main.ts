// Types Aliases

type stringOrNumber = string | number;
type stringOrNumberArr = (string | number)[];

interface Guitarist {
  name?: string;
  active: boolean;
  albums: stringOrNumberArr;
}

type UserId = stringOrNumberArr;

// Literal Types

let myName: "Seyha";

let userName: "Seyha" | "Jonh" | "Dave";

userName = "Seyha";

// Functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello!");
logMsg(add(2, 3));

let substract = function (a: number, b: number): number {
  return a - b;
};

// type mathFunction = (arg0: number, arg1: number) => number;

interface mathFunction {
  (arg0: number, arg1: number): number;
}

let multiply: mathFunction = function (a, b) {
  return a * b;
};

logMsg(multiply(2, 3));

// optional paramaters
const addAll = (a: number, b: number, c?: number) => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// defualt params value
const sumAll = (a: number = 10, b: number, c: number = 2) => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));

// Rest paramaters
const total = (a: number, ...num: number[]): number => {
  return a + num.reduce((previous, current) => previous + current);
};

logMsg(total(10, 2, 4));

// Never type

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinit = () => {
  let i: number = 1;

  while (true) {
    i++;
    if (i > 100) break;
  }
};

// Type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen!");
};
