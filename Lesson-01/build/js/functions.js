"use strict";
// Literal type 
let myName = 'sami';
let userName;
userName = 'ntm';
//-------------- functions ----------------
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
logMsg(add(83, 115));
let subtract = function (num1, num2) {
    return num1 - num2;
};
let multiply = (num1, num2) => {
    return num1 * num2;
};
// using optional parameter 
const addAll = (a, b, c) => {
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
};
// using default value 
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(83, 115, 100));
logMsg(addAll(83, 115));
logMsg(sumAll(83, 115));
const sumAll2 = (a = 10, b, c = 2) => {
    return a + b + c;
};
// Rest parameters 
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1));
// never type 
// which explicitly throw  error 
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// type also never when loop is infinite 
// return type of this function is never 
/*const infinite = () => {
    let i: number = 1;
    while(true){
        i++;
    }
}*/
// now return type of this function is void 
// as it doesn't has infinite loop 
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i >= 100)
            break;
    }
};
const numberOrStringFunc = (value) => {
    if (typeof value === 'number')
        return 'number';
    if (typeof value === 'string')
        return 'string';
    //return 'none'
    // but createError function will return 'never' type as throw error
    return createError('This should never happen');
};
// creating number type guard 
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// same function but using type guard to make it more readable 
const numberOrStringFunc2 = (value) => {
    if (isNumber(value))
        return 'number';
    if (typeof value === 'string')
        return 'string';
    //return 'none'
    // but createError function will return 'never' type as throw error
    return createError('This should never happen');
};
