"use strict";
// array is also object 
let myObj;
myObj = [];
myObj = {};
console.log(typeof myObj);
let bands = [];
myObj = bands;
const exampleObj = {
    prop1: 'sami',
    prop2: 115
};
let evh = {
    name: 'Test',
    active: false,
    album: ['ntm', 115]
};
let jp = {
    name: 'Test',
    active: false,
    album: ['ntm', 'sas', 115, 83]
};
evh = jp;
let evhOpt = {
    name: 'Test',
    active: false,
    album: ['ntm', 115]
};
let jpOpt = {
    name: 'Test',
    album: ['ntm', 'sas', 115, 83]
};
evhOpt = jpOpt;
//---------- using object in the function--------------
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
const stu1 = {
    name: 'ntm',
    roll: 83
};
const stu2 = {
    roll: 115
};
const greetStudent = (student) => {
    var _a;
    return `Hello ${(_a = student.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
    /*
    or use narrowing
    if(student.name){
      return `Hello ${student.name.toUpperCase()}`;
    }
    return `Hello`;
    */
};
console.log(greetStudent(stu1));
console.log(greetStudent(stu2));
//------------- ENUMS ---------------
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 83] = "A";
    Grade[Grade["B"] = 84] = "B";
    Grade[Grade["C"] = 85] = "C";
})(Grade || (Grade = {}));
console.log(Grade.B);
