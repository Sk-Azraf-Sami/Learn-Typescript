"use strict";
// convert to less or more specific 
let aa = 'ntm';
let bb = aa;
let cc = aa;
// angular don't support in react 
// but support in ts 
let dd = 'sas';
let ee = 'ntm';
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
// get error 
// as addOrConcat will return union of type 
// let myVal: string = addOrConcat(2,2,"concat"); 
// need to solve this problem using assertion 
let myVal = addOrConcat(2, 2, "concat");
// Be careful because Typescript doesn't see any problem here 
// but string is returned 
let myVal2 = addOrConcat(2, 2, "concat");
// unknown type 
// get error for next line 
// 10 as string 
// but no error for this line 
10;
// The DOM 
const myImg = document.querySelector('img'); // not null 
myImg.src;
const img = document.getElementById('img');
img.src;
