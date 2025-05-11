class Coder{
    name: string;
    music: string; 
    age: number; 
    lang: string;

    constructor(
        name: string, 
        music: string, 
        age: number, 
        lang: string
    ){
        this.name = name;
        this.music = music;
        this.age = age; 
        this.lang = lang
    }
}

// using visibility modifier/ data modifier/ access modifier 
class CodeVis{
  
    constructor(
        public readonly name: string, 
        public music: string, 
        private age: number, 
        protected lang: string = 'BN' // default parameter (make it optional)
    ){
        this.name = name;
        this.music = music;
        this.age = age; 
        this.lang = lang
    }
    public getAge(){
        return `Hello! I am ${this.age}`
    }
}

const Sami = new CodeVis('Sami', 'Rock', 24, 'ENG'); 
console.log(Sami.getAge());
// console.log(Sami.age); // still legal js, ts gives warning, it prints output  
// console.log(Sami.lang);

class WebDev extends CodeVis{
    constructor(
        public computer: string,
        name: string, 
        music: string, 
        age: number
    ){
        super(name, music, age); 
        this.computer = computer; 
    }
    public getLang(){
        return `I write in ${this.lang}`
    }
}

const Sara = new WebDev('Lenovo', 'Azraf', 'Lofi', 24);
console.log(Sara.getLang());


//////////////////////////
// implementing interface 
interface Musician{
    name: string, 
    instrument: string, 
    play(action: string): string, // method 
}
class TestClass implements Musician{
    name: string;
    instrument: string

    constructor(name: string, instrument: string){
        this.name = name, 
        this.instrument = instrument 
    }

    play(action: string): string{
        return `${this.name} ${action} ${this.instrument}`; 
    }
}

const Page = new TestClass('SAS', 'guitar');
console.log(Page.play('strums'))


//////////////////////////////
// static keyword 
class Peeps {
    static count: number = 0;
    static getCount(){
        return Peeps.count; 
    } 
    public id: number; 
    constructor(public name: string){
        this.name = name; 
        this.id = ++Peeps.count; 
    }
}

const John = new Peeps('John'); 
const Rahim = new Peeps('Rahim');
const Karim = new Peeps('Karim'); 

console.log(Rahim.id); 
console.log(Peeps.count); 

/////////////////////////////////
class Bands{
    private dataState: string[]; 
    
    constructor(){
        this.dataState = [];
    }
    public get data(): string[]{
        return this.dataState; 
    }
    public set data(value: string[]){
        if(Array.isArray(value) && value.every(el => typeof el === 'string')){
            this.dataState = value; 
        }
        else throw new Error('Param is not an array of string'); 
    }
}

const MyBands = new Bands(); 
MyBands.data = ['Neil Young', 'Led Zep'];
console.log(MyBands.data);

MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
// get error 
// MyBands.data = ['Van Halen', 5150]; 

// Index Signature and Keyoff Assertion 
interface TransactionObj{
    Pizza: number, 
    Book: number, 
    Job: number
}
const todaysTransactions: TransactionObj = {
    Pizza: -10, 
    Book: -5,
    Job: 50
}
console.log(todaysTransactions.Pizza); 
// or 
console.log(todaysTransactions['Pizza']);

// dynamic access 
let prop: string = 'Pizza'; 
// but this line gives error 
// to solve this error, need index signature 
//console.log(todaysTransactions[prop])

//////////// using index signature 
interface Shop {
    // [index: key] : value 
    // key can't be boolean 
    // [index: boolean] : number; --> gives error
    [index: string] : number;  
    // readonly [index: string] : number; 
}

const shopTranscation : Shop =  {
    Pen: -100,
    Chicken: -50
}

let prop2: string = 'Pen';
console.log(shopTranscation[prop2]);

const todaysNet = (transactions: Shop): number => {
    let total = 0; 
    for(const transaction in transactions){
        total = total + transactions[transaction]; 
    }
    return total; 
}

// readonly 
// shopTranscation.Pen = 80; 

// drawback 
// there is no key which name is 'Dhaka'
// so, it will print undefined 
// but typescript doesn't raise any issue 
console.log(shopTranscation['Dhaka']); 

// Another example 
interface shopTranscation2 {
    readonly [index: string]: number; 
    Pen: number; 
    Chicken: number 
}

const Shop2 : shopTranscation2 = {
    // pen and chicken is mandatory as they use in interface 
    Pen: 83, 
    Chicken: 115,
    // Test is optional here 
    Test: 1907
}
/***** [key: string]: string | number | number[] | undefined --> this using vs not using *******/

//////////////  not using 
interface StudentRes { 
    name: string, 
    roll: number, 
    // as 'classes' is optional the value of 'classes' key 
    // can be undefined or number array 
    classes?: number[] // optional prop 
}

const stud1: StudentRes = {
    name: 'Sami',
    roll: 115,
    classes: [7026, 1190]
}

// this line will give error 
// as there is no prop which name is 'gpa'
/////// console.log(stud1.gpa) 
// but if we use index signature 
// this line don't show any error 

// this itr also gives error 
// for(const key in stud1){
//     /*
//     Element implicitly has an 'any' type because expression of type 'string' 
//     can't be used to index type 'StudentRes'.
//     No index signature with a parameter of 
//     type 'string' was found on type 'StudentRes'
//     */
//     console.log(`${key}: ${stud1[key]}`)
// }

// To solve this issue using assertion 
for(const key in stud1){
    console.log(`${key}: ${stud1[key as keyof StudentRes]}`); 
}

// if we don't know the type
for(const key in stud1){
    console.log(`${key}: ${stud1[key as keyof typeof stud1]}`); 
}

// or 
Object.keys(stud1).map(key => {
    console.log(`${key}: ${stud1[key as keyof typeof stud1]}`);
})

// or 
const logStudentKey = (student: StudentRes, key: keyof typeof stud1) => {
    console.log(`Student ${student} is ${student[key]}`);
}
logStudentKey(stud1, 'name');

////////// using 
interface StudentRes2 { 
    [key: string]: string | number | number[] | undefined, 
    name: string, 
    roll: number, 
    // as 'classes' is optional the value of 'classes' key 
    // can be undefined or number array 
    classes?: number[] // optional prop 
}

const stud2: StudentRes2 = {
    name: 'Sami',
    roll: 115,
    classes: [7026, 1190]
}

console.log(stud2.gpa); // no error but return undefined 

for(const key in stud2){
    console.log(`${key}: ${stud2[key]}`); 
}

////////////// Another example 
// interface Income2{
//     [key: string]: number | string,
//     salary: number, 
//     bonus: number, 
//     sideHustle: string
// }

// alternative of interface 
type Streams2 = 'salary' | 'bonus' | 'sideHustle'; 
type Income2 = Record<Streams, number | string>
const monthlyIncome: Income2 = {
    salary: 100, // need to be number
    bonus: 115, // need to be number 
    sideHustle: 1190 // need to be string but using number, no issue rises 
    // because 'Record<Streams, number | string>' this line means all props
    // either number or string 
    // that means 'salary', 'bonus', 'sideHustle' supports both number and string 
}

for(const revenue in monthlyIncome){
    console.log(monthlyIncome[revenue as keyof Income]); 
}

// Drawback 
// interface Income{
//     [key: string]: number,
//     salary: number, 
//     bonus: number, 
//     sideHustle: number
// }

// alternative of interface 
type Streams = 'salary' | 'bonus' | 'sideHustle'; 
type Income = Record<Streams, number>