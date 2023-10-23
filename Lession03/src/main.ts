let stringArr = ["one", "hey", "Seyha"];

let guitars = ["strate", "Les paul", 5150];

let maxedData = ["EVH", 1984, true];

stringArr[0] = "Chheng";
guitars = stringArr;
maxedData = guitars;

let test = [];
let bands: string[] = [];
bands.push("Van Halen");

// Tuple

let myTuple: [string, number, boolean] = ["Cat", 25, false];
let mixed = ["Panda", 1, true];

myTuple[1] = 42;

// Objects

let myObj: object;
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Seyha",
  prop2: true,
};

exampleObj.prop1 = "Chheng Seyha";

// type Guitarist = {
//   name?: string;
//   active?: boolean;
//   albums: (string | number)[];
// };
interface Guitarist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
};

let jp: Guitarist = {
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "Iv"],
};

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!`;
  }
  return "Hello!";
};

console.log(greetGuitarist(jp));

enum Grade {
  A,
  B,
  C,
  D,
}

console.log(Grade.A);
