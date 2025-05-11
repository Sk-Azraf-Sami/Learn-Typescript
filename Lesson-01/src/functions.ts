// type aliases 
type stringOrNumber = string | number; 
type stringOrNumberArray = string | number[]; 

type Member = {
    ID: stringOrNumber, 
    Name: string, 
    Experience: stringOrNumberArray 
}

// Literal type 
let myName = 'sami'; 

let userName: 'ntm' | 'sas'; 
userName = 'ntm'; 

//-------------- functions ----------------
const add = (a: number,b: number):number => {
    return a+b; 
}

const logMsg = (message: any): void => {
    console.log(message); 
}
logMsg('Hello');
logMsg(add(83,115)); 

let subtract = function(num1: number, num2: number) : number{
    return num1 - num2; 
}

// create function type 
type mathFunction = (a:number, b:number) => number; 
let multiply: mathFunction = (num1, num2) => {
    return num1 * num2; 
}

// using interface 
interface mathFunction2 {
    (a: number, b: number): number
}

// using optional parameter 
const addAll = (a:number, b:number, c?:number) => {
    if(c !== undefined){
        return a + b + c; 
    }
    return a + b; 
}

// using default value 
const sumAll = (a:number, b:number, c:number = 2) => {
    return a + b + c; 
}
logMsg(addAll(83,115,100)); 
logMsg(addAll(83,115)); 
logMsg(sumAll(83,115));

const sumAll2 = (a:number=10, b:number, c:number = 2) => {
    return a + b + c; 
}

// Rest parameters 
const total = (...nums:number[]): number => {
    return nums.reduce((prev, curr) => prev + curr); 
}
logMsg(total(1)); 

// never type 
// which explicitly throw  error 
const createError = (errMsg: string) => {
    throw new Error(errMsg); 
}

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
    let i: number = 1;
    while(true){
        i++;
        if(i>=100) break;
    }
}

const numberOrStringFunc = (value: number | string): string => {
    if(typeof value === 'number') return 'number'; 
    if(typeof value === 'string') return 'string'; 
    
    //return 'none'
    // but createError function will return 'never' type as throw error
    return createError('This should never happen'); 
}

// creating number type guard 
const isNumber = (value: any): boolean => {
    return typeof value === 'number'? true : false; 
}

// same function but using type guard to make it more readable 
const numberOrStringFunc2 = (value: number | string): string => {
    if(isNumber(value)) return 'number'; 
    if(typeof value === 'string') return 'string'; 
    
    //return 'none'
    // but createError function will return 'never' type as throw error
    return createError('This should never happen'); 
}