"use strict";
// Utility types
const updateAssignment = (assign, propToUpdate) => {
    return Object.assign(Object.assign({}, assign), propToUpdate);
};
const assign1 = {
    studentId: "comsc123",
    title: "Final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
// Require and readonly
const recordAssingment = (assign1) => {
    return assign1;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: false });
// assignVerified.verified = true
recordAssingment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// Record
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000",
};
const finalGrades = {
    Sara: "B",
    Kelly: "U",
};
const gradeData = {
    Sara: { assign1: 95, assign2: 65 },
    Kelly: { assign1: 85, assign2: 15 },
};
console.log(gradeData);
const score = {
    studentId: "k124",
    grade: 85,
};
const preview = {
    studentId: "oka1234",
    grade: 96,
};
// ReturnType
