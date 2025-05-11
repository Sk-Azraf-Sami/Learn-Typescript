// array is also object 

let myObj: object; 
myObj = []; 
myObj = {}; 
console.log(typeof myObj);  

let bands: string[] = []; 
myObj = bands; 

const exampleObj = {
    prop1: 'sami',
    prop2: 115
}; 

// ------------------create type for object--------------- 
type Guitarist = {
    name: string, 
    active: boolean, 
    album: (string | number)[]
}

let evh: Guitarist = {
    name: 'Test',
    active: false, 
    album: ['ntm', 115] 
}

let jp: Guitarist = {
    name: 'Test',
    active: false, 
    album: ['ntm', 'sas', 115, 83] 
}

evh = jp 

// make optional property 
type GuitaristOpt = {
    name: string, 
    active?: boolean, 
    album: (string | number)[]
}

let evhOpt: GuitaristOpt = {
    name: 'Test',
    active: false, 
    album: ['ntm', 115] 
}

let jpOpt: GuitaristOpt = {
    name: 'Test',
    album: ['ntm', 'sas', 115, 83] 
}

evhOpt = jpOpt; 

//---------- using object in the function--------------
const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}!`; 
}


//-------- interface and type are same thing-----------
type GuitaristTest = {
    name: string, 
    active?: boolean, 
    album: (string | number)[]
}

interface GuitaristTest2 {
    name: string, 
    active?: boolean, 
    album: (string | number)[]
}


// if function use optional property of object 
interface Student {
    name?: string,  // optional name property 
    roll: number
}

const stu1: Student = {
    name: 'ntm', 
    roll: 83 
}

const stu2: Student = {
    roll: 115
}

const greetStudent = (student: Student) => {
    return `Hello ${student.name?.toUpperCase()}`;
    /* 
    or use narrowing 
    if(student.name){
      return `Hello ${student.name.toUpperCase()}`;
    }
    return `Hello`; 
    */ 
}

console.log(greetStudent(stu1));
console.log(greetStudent(stu2)); 

//------------- ENUMS ---------------
 enum Grade {
    A=83,
    B, 
    C
 }
 console.log(Grade.B); 