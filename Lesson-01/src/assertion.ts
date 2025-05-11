// assertion/ type casting 
type One = string; 
type Two = string | number; 
type Three = 'hello'; 

// convert to less or more specific 
let aa: One = 'ntm'
let bb= aa as Two
let cc= aa as Three 

// angular don't support in react 
// but support in ts 
let dd = <One>'sas'; 
let ee = <One | Two>'ntm'; 

const addOrConcat = (a:number, b:number, c:'add' | 'concat'): number | string => {
    if(c==='add'){
        return a+b;
    }
    return '' + a + b; 
}
// get error 
// as addOrConcat will return union of type 
// let myVal: string = addOrConcat(2,2,"concat"); 

// need to solve this problem using assertion 
let myVal: string = addOrConcat(2,2,"concat") as string;

// Be careful because Typescript doesn't see any problem here 
// but string is returned 
let myVal2: number = addOrConcat(2,2,"concat") as number;

// unknown type 
// get error for next line 
// 10 as string 

// but no error for this line 
(10 as unknown) as string; 


// The DOM 
const myImg = document.querySelector('img')! // not null 
myImg.src; 

const img = document.getElementById('img') as HTMLImageElement; 
img.src 
