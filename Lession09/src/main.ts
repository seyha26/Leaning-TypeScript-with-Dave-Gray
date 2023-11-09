// Utility types

// Partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propToUpdate };
};

const assign1: Assignment = {
  studentId: "comsc123",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

// Require and readonly

const recordAssingment = (assign1: Required<Assignment>): Assignment => {
  return assign1;
};
const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: false,
};
// assignVerified.verified = true

recordAssingment({ ...assignGraded, verified: true });

// Record

const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000",
};

type Student = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Student, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Student, Grades> = {
  Sara: { assign1: 95, assign2: 65 },
  Kelly: { assign1: 85, assign2: 15 },
};

console.log(gradeData);

// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "k124",
  grade: 85,
};

type AssignPreview = Omit<Assignment, "title" | "verified">;
const preview: AssignPreview = {
  studentId: "oka1234",
  grade: 96,
};

// Extract and Exclude

type AdjustedGrade = Exclude<LetterGrades, "U">;

type HighGrade = Extract<LetterGrades, "A" | "B">;

// Nonnullable

type AllPossibleGrades = "Dave" | "Jonh" | null | undefined

type NamesOnly = NonNullable<AllPossibleGrades>

// ReturnType

