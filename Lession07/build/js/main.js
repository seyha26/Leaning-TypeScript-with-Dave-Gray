"use strict";
// Index Signatures
const todayTransactions = {
    Pizza: -10,
    Books: -20,
    Job: 3,
};
console.log(todayTransactions.Banana);
console.log(todayTransactions["Job"]);
const props = "Pizza";
console.log(todayTransactions[props]);
const todayNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todayNet(todayTransactions));
console.log(todayTransactions["Dev"]);
const student = {
    name: "Dev",
    GPA: 3.5,
    classes: [50, 100],
};
// console.log(student["test"]);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "GPA");
const monthlyIncomes = {
    salary: 100,
    bonus: 5,
    sidehustle: 20,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
