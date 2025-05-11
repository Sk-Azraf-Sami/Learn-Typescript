const stringEcho = (arg: string): string => arg;
// using generics 
const Echo = <T>(arg: T): T => arg

// If object type, return true 
const isObj = <T>(arg: T): boolean => {
    // because null is object type 
    // array is object type 
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
}
console.log(isObj(true));
console.log(isObj(null));
console.log(isObj([1, 2, 3]));
console.log(isObj('ntm'));
console.log(isObj({ name: 'ntm' }));


// another example 
const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
    // if array is empty return array, false 
    if (Array.isArray(arg) && !arg.length) {
        return { arg: arg, is: false }
    }

    // if empty object, return object and false 
    // using user defined 'isObj' function 
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { arg: arg, is: false };
    }

    return { arg: arg, is: !!arg };
}

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('ntm'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: 'ntm' }));
console.log(isTrue([]));
console.log(isTrue([1907, 83, 115]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

// using interface for 'isTrue' function 
interface BoolCheck<T> {
    arg: T,
    is: boolean
}
const isTrue2 = <T>(arg: T): BoolCheck<T> => {
    // if array is empty return array, false 
    if (Array.isArray(arg) && !arg.length) {
        return { arg: arg, is: false }
    }

    // if empty object, return object and false 
    // using user defined 'isObj' function 
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { arg: arg, is: false };
    }

    return { arg: arg, is: !!arg };
}


// narrowing Generic Type 
interface HasID {
    id: number
}
const processUser = <T extends HasID>(user: T): T => {
    return user;
}
console.log(processUser({ id: 83, name: 'ntm' }));
// get error for next line 
// as  no id in object
// console.log(processUser(name: 'sas')); 


// more complex example 
const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key]);
}

const userArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    }
]

console.log(getUsersProperty(userArray, 'email')); 
console.log(getUsersProperty(userArray, 'username')); 


// another example 
class stateObj<T>{
    private data: T; 

    constructor(value: T){
        this.data = value; 
    }
    // getter 
    get state(): T{
        return this.data; 
    }
    //setter 
    set state(value: T){
        this.data = value; 
    }
}

// example of inference 
const store = new stateObj("ntm"); 
console.log(store.state); 
store.state = 'cse'; 
// Error: Type 'number' is not assignable to type 'string'
// when we set state value as string 
// typescript set the type of state as string although it is generics 
// store.state = 83 

// solve this problem 
const myState = new stateObj<(string | number | boolean)[]> ([83]);
myState.state = ["ntm", 83, true]; 
console.log(myState.state); 