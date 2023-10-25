"use strict";
class Coder {
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
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
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev("Mac", "Sara", "Rap", 23);
console.log(Sara.getLang());
console.log(Sara.getAge());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}.`;
    }
}
const Page = new Guitarist("Seyha", "guitar");
console.log(Page.play("strums"));
///////////////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Jonh = new Peeps("Jonh");
const Stave = new Peeps("Stave");
const Alex = new Peeps("Alex");
console.log(Jonh.id);
console.log(Alex.id);
console.log(Stave.id);
console.log(Peeps.getCount());
///////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an Array of strings");
    }
}
const MyBands = new Bands();
MyBands.data = ["Jonh", "Justin", "Selena"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "Jonhson"];
console.log(MyBands.data);
