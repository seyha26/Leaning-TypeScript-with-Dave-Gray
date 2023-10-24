"use strict";
// Original Js Code
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("datatime", thisYear)
// year.textContent = thisYear
// My 1st solution
const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datatime", thisYear);
year.textContent = thisYear;
// My 2st solution
// const year = <HTMLElement>document.getElementById("year");
// const thisYear = new Date().getFullYear() as unknown as string;
// year.setAttribute("datatime", thisYear);
// year.textContent = thisYear;
// =================================solution from video==============================================
// let year: HTMLElement | null;
// year = document.getElementById("year");
// let thisYear: string;
// thisYear = new Date().getFullYear().toString();
// if (year) {
//   year.setAttribute("datatime", thisYear);
//   year.textContent = thisYear;
// }
// let year = document.getElementById("year") as HTMLSpanElement;
// let thisYear: string = new Date().getFullYear().toString();
// year.setAttribute("datatime", thisYear);
// year.textContent = thisYear;
