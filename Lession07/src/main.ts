// Index Signatures

// interface TransactionObj {
//   readonly [index: string]: number;
// }

interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const todayTransactions: TransactionObj = {
  Pizza: -10,
  Books: -20,
  Job: 3,
};

console.log(todayTransactions.Banana);
console.log(todayTransactions["Job"]);

const props: string = "Pizza";

console.log(todayTransactions[props]);

const todayNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todayNet(todayTransactions));

console.log(todayTransactions["Dev"]);

// todayTransactions.Job = 100;

////////////////////////////////////////////////////////////////////////////

interface Student {
  // [key: string]: number | string | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Dev",
  GPA: 3.5,
  classes: [50, 100],
};

// console.log(student["test"]);

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "GPA");

//////////////////////////////////////////////////////////////////////

// interface Incomes {
//   [key: string]: number
// }

type Streams = "salary" | "bonus" | "sidehustle";
type Incomes = Record<Streams, number | string>;

const monthlyIncomes: Incomes = {
  salary: 100,
  bonus: 5,
  sidehustle: 20,
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
