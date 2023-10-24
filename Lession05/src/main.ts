type One = string;
type Two = string | number;
type Three = "hello";

// Convert to more or less specific
let a: One = "helo";
let b = a as Two;
let c = a as Three;

let d = <One>"Hello world!";
let e = <string | number>"Home";

let addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): string | number => {
  if (c === "add") {
    return a + b;
  }
  return "" + a + b;
};

const myVal: string = addOrConcat(2, 2, "concat") as string;

//Becareful! TS sees no problem - but a string is returned,
const nextVal: number = addOrConcat(2, 2, "concat") as number;

// 10 as string
10 as unknown as string;

const img = document.querySelector("img") as HTMLImageElement;
const myImg = document.getElementById("myImg");
const nextImg = <HTMLImageElement>document.getElementById("nextImg");

img.src;
