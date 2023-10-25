class Coder {
  secondLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "TypeScript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
  getAge() {
    return `Hello! I'm ${this.age} years old.`;
  }
}

const Dev = new Coder("Seyha", "Rock", 17);
console.log(Dev.getAge());
// console.log(Dev.age);
// console.log(Dev.lang);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  getLang() {
    return `I write ${this.lang}`;
  }
}

const Sara = new WebDev("Mac", "Sara", "Rap", 23);

console.log(Sara.getLang());
console.log(Sara.getAge());
// console.log(Sara.age)
// console.log(Sara.lang)
////////////////////////////////////////////////////////

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}.`;
  }
}

const Page = new Guitarist("Seyha", "guitar");
console.log(Page.play("strums"));

///////////////////////////////////////////////////////////////

class Peeps {
  static count: number = 0;
  static getCount() {
    return Peeps.count;
  }
  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const Jonh = new Peeps("Jonh");
const Stave = new Peeps("Stave");
const Alex = new Peeps("Alex");

console.log(Jonh.id);
console.log(Alex.id);
console.log(Stave.id);
console.log(Peeps.getCount());
///////////////////////////////////////////

class Bands {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }

  public get data() {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an Array of strings");
  }
}

const MyBands = new Bands();
MyBands.data = ["Jonh", "Justin", "Selena"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "Jonhson"];
console.log(MyBands.data);
