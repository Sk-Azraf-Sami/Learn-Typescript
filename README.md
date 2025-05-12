## Table of Contents 
- [Basic Concepts & Types](#basic-concepts--types)
- [Arrays, Tuples, and Type Safety](#arrays-tuples-and-type-safety)
- [Object](#object)
- [Advanced Types & Functions](#advanced-types--functions)
- [Type Assertions, Unknown, and DOM Handling](#type-assertions-unknown-and-dom-handling)
- [OOP, Interfaces, Index Signatures, and Records](#oop-interfaces-index-signatures-and-records)
- [Generics](#generics)
- [Utility Types](#utility-types)

---

## 📘 [Basic Concepts & Types](#basic-concepts--types)

### ✅ 1. Variable Declaration with Type Inference

```ts
let username = 'Sami';
console.log(username);
```

* TypeScript automatically infers the type of `username` as `string` because it's initialized with a string.
* This is called **type inference** — TypeScript assigns a type based on the value provided.

---

### 🔢 2. Explicit Type Annotation

```ts
let a: number = 12;
// let b: string = "6";
let b: number = 6;
let c: number = 10;

console.log(a / b);
```

* You can explicitly define the type of a variable using `: type`.
* Here, `a`, `b`, and `c` are explicitly set to type `number`.
* TypeScript will throw an error if you try to assign a value of a different type (e.g., uncommenting `b: string = "6"`).

---

### 👤 3. Type Safety

```ts
let myname = 'azraf';
// myname = 83;
```

* TypeScript infers `myname` as `string`.
* If you try to assign a number to `myname`, it results in a **type error**.
* This enforces **type safety** — helps prevent bugs caused by unexpected types.

---

### ➕ 4. Function with Type Annotations

```ts
const sum = (a: number, b: number) => {
    return a + b;
};
```

* Function parameters and return values can have types.
* This ensures correct usage and avoids type-related issues in function calls.

---

### 🔄 5. The `any` Type

```ts
let album: any;
```

* The `any` type disables type checking for that variable.
* It can hold **any value**, such as string, number, object, etc.
* Use with caution — it sacrifices TypeScript’s benefits.

---

### 🔁 6. Union Types

```ts
let postId: string | number;
```

* A **union type** allows a variable to be one of multiple types.
* `postId` can be either a `string` or a `number`.

---

### 🔤 7. Regular Expressions

```ts
let re: RegExp = /\w+/g;
```

* `RegExp` is a built-in type in TypeScript for regular expressions.
* `\w+` matches one or more word characters.
* The `g` flag stands for "global" (matches all occurrences).

---

## Arrays, Tuples, and Type Safety

### 📚 1. String Array

```ts
let stringArr = ['Dhaka', 'Bangladesh', 'Khulna'];
```

* TypeScript infers `stringArr` as `string[]`.
* All elements must be of type `string`.

```ts
// stringArr[0] = 115; ❌ Error
```

* You cannot assign a `number` to an index of a `string[]` array.

---

### 🔄 2. Mixed Type Array (Union Inference)

```ts
let mixArr = ['ntm', 83, 'sas', 115];
```

* TypeScript infers this as `(string | number)[]` — a union of `string` and `number`.

```ts
mixArr[0] = 1907; // ✅ OK
// mixArr.unshift(true); ❌ Error
```

* You can reassign elements with either `string` or `number`.
* Adding a `boolean` (`true`) causes a type error, as `boolean` isn’t in the union.

---

### ⚠️ 3. Array Type Compatibility

```ts
// stringArr = mixArr; ❌ Error
mixArr = stringArr; // ✅ OK
```

* You **cannot assign** a union-typed array (with more types) to a strictly typed one (`string[]`).
* But assigning a `string[]` to a `(string | number)[]` is allowed — it's compatible because `string[]` is a subset of the union.

---

### 🏷️ 4. Explicit Array Typing

```ts
let stuName: string[] = [];
stuName.push('ntm');
```

* You can explicitly declare an array’s type using `type[]`.
* Here, only strings can be added to `stuName`.

---

### 📦 5. Tuples – Fixed-Length & Fixed-Type Arrays

```ts
let myTuples: [string, number, boolean] = ['ntm', 83, true];
```

* A **tuple** defines:

  * A fixed number of elements.
  * Each element must be of a specific type **and position matters**.

```ts
let arrTest = ['ntm', 83, true];
arrTest = myTuples; // ✅ OK (tuple → array)
myTuples = arrTest; // ❌ Error (array → tuple)
```

* You can assign a tuple to a normal array.
* But you **can’t assign** a regular array to a tuple unless its exact structure and types are guaranteed.

---

Great work! Here's the next part of your **TypeScript Notes**, now covering **Type Aliases**, **Function Types**, **Interfaces**, **Optional & Default Parameters**, **Rest Parameters**, and **the `never` Type** — with well-structured explanations.

---

## 📘 Object


### 🔹 Arrays Are Objects

```ts
let myObj: object; 
myObj = []; // Valid: arrays are a type of object
myObj = {}; // Valid: plain object
console.log(typeof myObj); // 'object'
```

#### 💡 Explanation:

* In TypeScript (and JavaScript), arrays are technically objects.
* You can assign both arrays and plain objects to a variable of type `object`.

---

### 🔹 Working with Object Types

#### Defining and Using Object Type

```ts
type Guitarist = {
  name: string;
  active: boolean;
  album: (string | number)[];
};

let evh: Guitarist = {
  name: 'Test',
  active: false,
  album: ['ntm', 115]
};

let jp: Guitarist = {
  name: 'Test',
  active: false,
  album: ['ntm', 'sas', 115, 83]
};

evh = jp; // Valid assignment
```

#### 💡 Explanation:

* `type` lets you define custom object types.
* Here, `album` accepts an array of `string | number`.

---

### 🔹 Optional Object Properties

```ts
type GuitaristOpt = {
  name: string;
  active?: boolean; // Optional property
  album: (string | number)[];
};

let evhOpt: GuitaristOpt = {
  name: 'Test',
  active: false,
  album: ['ntm', 115]
};

let jpOpt: GuitaristOpt = {
  name: 'Test',
  album: ['ntm', 'sas', 115, 83]
};

evhOpt = jpOpt; // Valid: 'active' is optional
```

#### 💡 Explanation:

* Optional properties (using `?`) allow you to omit them when creating objects.

---

### 🔹 Using Object Types in Functions

```ts
const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name}!`;
};
```

#### 💡 Explanation:

* You can pass a custom object type into a function parameter.
* TypeScript ensures the object matches the type structure.

---

### 🔹 Type vs Interface

```ts
type GuitaristTest = {
  name: string;
  active?: boolean;
  album: (string | number)[];
};

interface GuitaristTest2 {
  name: string;
  active?: boolean;
  album: (string | number)[];
}
```

#### 💡 Explanation:

* `type` and `interface` are mostly interchangeable for object shapes.
* Interfaces are preferred in large-scale OOP or when extending.

---

### 🔹 Optional Chaining in Functions

```ts
interface Student {
  name?: string;
  roll: number;
}

const stu1: Student = { name: 'ntm', roll: 83 };
const stu2: Student = { roll: 115 };

const greetStudent = (student: Student) => {
  return `Hello ${student.name?.toUpperCase()}`;
  // Or with narrowing:
  // if (student.name) {
  //   return `Hello ${student.name.toUpperCase()}`;
  // }
  // return `Hello`;
};

console.log(greetStudent(stu1)); // Hello NTM
console.log(greetStudent(stu2)); // Hello undefined
```

#### 💡 Explanation:

* Use optional chaining (`?.`) to safely access potentially undefined properties.
* Alternative: use conditional checks (narrowing).

---

### 🔹 Enums in TypeScript

```ts
enum Grade {
  A = 83,
  B, // 84
  C  // 85
}

console.log(Grade.B); // 84
```

#### 💡 Explanation:

* Enums allow for named constants.
* If one member is initialized (`A = 83`), others increment by 1 automatically unless explicitly set.

---


## 📘 Advanced Types & Functions

### 📌 1. Type Aliases

```ts
type stringOrNumber = string | number;
type stringOrNumberArray = string | number[];
```

* **Type aliases** help you create custom names for union types or complex types.
* Useful for cleaner and more readable code.

---

### 👥 2. Custom Object Types

```ts
type Member = {
  ID: stringOrNumber;
  Name: string;
  Experience: stringOrNumberArray;
};
```

* The `Member` type uses other custom type aliases.
* Great for defining consistent structure across multiple objects.

---

### 🧱 3. Literal Types

```ts
let myName = 'sami';

let userName: 'ntm' | 'sas';
userName = 'ntm'; // ✅ Allowed
```

* A **literal type** restricts a variable to exactly one or more allowed values.
* Acts like an enum without extra syntax.

---

### 🔧 4. Functions with Type Annotations

#### Basic Functions

```ts
const add = (a: number, b: number): number => a + b;

const logMsg = (message: any): void => {
  console.log(message);
};
```

* `:number` specifies return type.
* `:void` indicates the function **does not return a value**.

---

#### Function Expressions

```ts
let subtract = function(num1: number, num2: number): number {
  return num1 - num2;
};
```

* Function expressions can also have type annotations.

---

### 🧾 5. Function Type Aliases & Interfaces

```ts
type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = (num1, num2) => num1 * num2;
```

```ts
interface mathFunction2 {
  (a: number, b: number): number;
}
```

* Define function signatures using `type` or `interface` to enforce structure across function variables.

---

### ❓ 6. Optional & Default Parameters

```ts
const addAll = (a: number, b: number, c?: number): number => {
  return c !== undefined ? a + b + c : a + b;
};

const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};
```

* `c?: number` = **optional parameter** (can be omitted).
* `c: number = 2` = **default value** (used if not passed).

```ts
const sumAll2 = (a: number = 10, b: number, c: number = 2) => a + b + c;
```

* Default values can also be assigned to parameters other than the last, but usage must match carefully.

---

### 📚 7. Rest Parameters

```ts
const total = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr);
};
```

* `...nums: number[]` = accepts any number of arguments into a single array.
* Perfect for aggregation and iteration.

---

### 🚫 8. The `never` Type

#### Throwing Errors

```ts
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};
```

* `never` means the function **never returns** (due to error or infinite loop).

#### Infinite Loops (commented)

```ts
/* const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
  }
}; */
```

* This also returns `never` because it never terminates.

#### With Break (returns `void`)

```ts
const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i >= 100) break;
  }
};
```

---

### ✅ 9. Type Guards

#### Manual Type Checking

```ts
const numberOrStringFunc = (value: number | string): string => {
  if (typeof value === 'number') return 'number';
  if (typeof value === 'string') return 'string';
  return createError('This should never happen');
};
```

* Type guards allow safe narrowing of union types.

#### Reusable Guard Function

```ts
const isNumber = (value: any): boolean => {
  return typeof value === 'number';
};

const numberOrStringFunc2 = (value: number | string): string => {
  if (isNumber(value)) return 'number';
  if (typeof value === 'string') return 'string';
  return createError('This should never happen');
};
```

* Improves readability and reusability by abstracting the guard logic.


---

## 📘 Type Assertions, Unknown, and DOM Handling

### 🧾 1. Type Assertions (a.k.a. Type Casting)

```ts
type One = string;
type Two = string | number;
type Three = 'hello';
```

#### More to Less Specific (Widening)

```ts
let aa: One = 'ntm';
let bb = aa as Two;    // ✅ Allowed: string → string | number
```

#### Less to More Specific (Narrowing)

```ts
let cc = aa as Three;  // ✅ Allowed: string → 'hello' (but risky unless value matches exactly)
```

* TypeScript allows casting to more or less specific types using `as`.
* **⚠️ Warning**: This bypasses safety checks — you tell TypeScript "Trust me".

---

### 🧩 2. JSX vs TypeScript Syntax for Assertions

#### Non-JSX (e.g. Angular, TS files):

```ts
let dd = <One>'sas';
let ee = <One | Two>'ntm';
```

* ✅ Valid in `.ts` files (non-JSX).
* ❌ Not allowed in `.tsx` (React uses angle brackets for JSX elements).

> In `.tsx`, always use `as` syntax instead.

---

### ➕ 3. Return Value Assertion Example

```ts
const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
  if (c === 'add') return a + b;
  return '' + a + b;
};
```

```ts
// ❌ Error: TS can't guarantee return is a string
// let myVal: string = addOrConcat(2, 2, "concat");

let myVal: string = addOrConcat(2, 2, "concat") as string; // ✅

let myVal2: number = addOrConcat(2, 2, "concat") as number; // ⚠️ Compiles, but incorrect!
```

* Type assertions **do not validate correctness** — use carefully!
* In `myVal2`, a `string` is forcibly treated as a `number`, which may cause runtime bugs.

---

### 🕵️ 4. The `unknown` Type

```ts
// 10 as string; ❌ Error
(10 as unknown) as string; // ✅ Allowed
```

* You can **double assert**: from any type to `unknown`, then to the desired type.
* Avoid unless absolutely necessary (used when dealing with third-party or very dynamic data).

---

### 🌐 5. Working with the DOM

#### Non-null Assertion (`!`)

```ts
const myImg = document.querySelector('img')!; // Tells TS this will never be null
myImg.src;
```

* The `!` operator is the **non-null assertion** operator.
* Use with caution — TypeScript will **not warn** if `querySelector` returns `null`.

---

#### Type Casting DOM Elements

```ts
const img = document.getElementById('img') as HTMLImageElement;
img.src;
```

* You must **cast** DOM elements when accessing their specific properties (e.g., `.src` is not available on generic `HTMLElement`).
* This ensures TypeScript knows the correct element type.

---

### ⚠️ Summary Tips

| Scenario                     | TypeScript Behavior                     |
| ---------------------------- | --------------------------------------- |
| `as` type assertions         | Bypass type checking — be careful       |
| `unknown`                    | Safer than `any`, forces type narrowing |
| DOM queries                  | Often return `HTMLElement` or `null`    |
| Use `as HTMLImageElement`    | To access image-specific properties     |
| Avoid `as number` on strings | Could lead to silent logic errors       |

---

This is an excellent and thorough overview of **advanced TypeScript concepts**, especially object-oriented programming and structural typing. Here's a structured summary of everything you've written for quick reference and learning:

---

## 📘 OOP, Interfaces, Index Signatures, and Records


### 1️⃣ **Classes with Access Modifiers**

```ts
class CodeVis {
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = 'BN'
  ) {}
  
  public getAge() {
    return `Hello! I am ${this.age}`;
  }
}
```

| Modifier    | Visibility                             |
| ----------- | -------------------------------------- |
| `public`    | Accessible everywhere                  |
| `private`   | Only inside the class                  |
| `protected` | Class + subclasses                     |
| `readonly`  | Cannot be changed after initialization |

---

### 2️⃣ **Inheritance**

```ts
class WebDev extends CodeVis {
  constructor(public computer: string, name: string, music: string, age: number) {
    super(name, music, age);
  }

  public getLang() {
    return `I write in ${this.lang}`;
  }
}
```

---

### 3️⃣ **Interfaces & Implementation**

```ts
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class TestClass implements Musician {
  constructor(public name: string, public instrument: string) {}

  play(action: string): string {
    return `${this.name} ${action} ${this.instrument}`;
  }
}
```

---

### 4️⃣ **Static Properties**

```ts
class Peeps {
  static count = 0;
  public id: number;

  constructor(public name: string) {
    this.id = ++Peeps.count;
  }

  static getCount() {
    return Peeps.count;
  }
}
```

* Use `ClassName.staticProperty` to access static members.

---

### 5️⃣ **Getter & Setter with Validation**

```ts
class Bands {
  private dataState: string[] = [];

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
      this.dataState = value;
    } else {
      throw new Error('Param is not an array of string');
    }
  }
}
```

---

### 6️⃣ **Index Signatures**

#### a. Dynamic Keys

```ts
interface Shop {
  [index: string]: number;
}

const shopTranscation: Shop = {
  Pen: -100,
  Chicken: -50,
};

let prop2 = 'Pen';
console.log(shopTranscation[prop2]); // ✔️
console.log(shopTranscation['Dhaka']); // ❌ undefined but no error
```

#### b. With Specific Keys

```ts
interface shopTranscation2 {
  readonly [index: string]: number;
  Pen: number;
  Chicken: number;
}

const Shop2: shopTranscation2 = {
  Pen: 83,
  Chicken: 115,
  Test: 1907, // allowed due to index signature
};
```

---

### 7️⃣ **Iterating Over Object Keys**

#### Using `keyof` or `typeof`

```ts
interface StudentRes {
  name: string;
  roll: number;
  classes?: number[];
}

const stud1: StudentRes = {
  name: 'Sami',
  roll: 115,
  classes: [7026, 1190],
};

for (const key in stud1) {
  console.log(`${key}: ${stud1[key as keyof typeof stud1]}`);
}
```

---

### 8️⃣ **Using Index Signature in Object**

```ts
interface StudentRes2 {
  [key: string]: string | number | number[] | undefined;
  name: string;
  roll: number;
  classes?: number[];
}
```

* Accessing `stud2.gpa` is allowed, even if not declared.
* All keys must have types within the declared union.

---

### 9️⃣ **Using `Record` Utility Type**

```ts
type Streams2 = 'salary' | 'bonus' | 'sideHustle';
type Income2 = Record<Streams2, number | string>;

const monthlyIncome: Income2 = {
  salary: 100,
  bonus: 115,
  sideHustle: 1190, // string expected? allowed due to union
};
```

#### Strict Alternative:

```ts
type Income = Record<'salary' | 'bonus' | 'sideHustle', number>;
```

---

### 🔚 Summary

| Concept             | Key Feature                               |
| ------------------- | ----------------------------------------- |
| Class modifiers     | Encapsulation with `private`, `protected` |
| Interface           | Contract enforcement                      |
| Static fields       | Shared across instances                   |
| Getters/Setters     | Controlled access to properties           |
| Index Signature     | Allow unknown keys with known value types |
| `Record` utility    | Type-safe object with predefined keys     |
| `keyof` + Assertion | Safe dynamic property access              |

---

## 📘 Generics

### 1. Basic Function with and without Generics

```ts
const stringEcho = (arg: string): string => arg;
```

This function returns the same string that is passed to it. But it's limited to `string` type.

#### Using Generics

```ts
const Echo = <T>(arg: T): T => arg;
```

This version is more flexible. It accepts any type and returns the same type. The type `T` is inferred based on the argument.

---

### 2. Type Guard for Object Type

```ts
const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
}
```

* Checks if a value is a non-null, non-array object.
* Useful for filtering out arrays and null which are also of type `object` in JavaScript.

#### Example Usage

```ts
console.log(isObj(true)); // false
console.log(isObj(null)); // false
console.log(isObj([1, 2, 3])); // false
console.log(isObj('ntm')); // false
console.log(isObj({ name: 'ntm' })); // true
```

---

### 3. Truthy Check with Custom Logic

```ts
const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
    if (Array.isArray(arg) && !arg.length) return { arg, is: false };
    if (isObj(arg) && !Object.keys(arg).length) return { arg, is: false };
    return { arg, is: !!arg };
}
```

This function checks whether a value is logically "truthy", with special rules:

* Empty array: false
* Empty object: false
* Otherwise: Boolean(arg)

#### Interface Version

```ts
interface BoolCheck<T> {
    arg: T,
    is: boolean
}

const isTrue2 = <T>(arg: T): BoolCheck<T> => {
    // same logic as isTrue
}
```

#### Example Usage

```ts
console.log(isTrue(false));     // { arg: false, is: false }
console.log(isTrue({}));        // { arg: {}, is: false }
console.log(isTrue([1,2,3]));   // { arg: [1,2,3], is: true }
```

---

### 4. Constrained Generics with Interface

```ts
interface HasID {
    id: number;
}

const processUser = <T extends HasID>(user: T): T => user;
```

This function enforces that the passed object must have an `id` property of type `number`.

```ts
console.log(processUser({ id: 83, name: 'ntm' })); // ✅
// console.log(processUser({ name: 'sas' })); ❌ Error
```

---

### 5. Dynamic Property Access from Array of Objects

```ts
const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key]);
}
```

* `T` is a generic object type that must include an `id`.
* `K` is a key of `T`, ensuring type safety for property access.

#### Example:

```ts
const userArray = [
  { id: 1, name: 'Leanne', username: 'Bret', email: 'a@example.com' },
  { id: 2, name: 'Ervin', username: 'Antonette', email: 'b@example.com' }
];

console.log(getUsersProperty(userArray, 'email')); // ['a@example.com', 'b@example.com']
```

---

### 6. Generic Class with Getter/Setter

```ts
class stateObj<T> {
    private data: T;

    constructor(value: T) {
        this.data = value;
    }

    get state(): T {
        return this.data;
    }

    set state(value: T) {
        this.data = value;
    }
}
```

* A generic class that stores any type.
* Maintains type throughout access and updates.

#### Example:

```ts
const store = new stateObj("ntm");
store.state = "cse"; // ✅
// store.state = 83;  // ❌ Type error
```

#### Solution for Multi-type

```ts
const myState = new stateObj<(string | number | boolean)[]>([83]);
myState.state = ["ntm", 83, true]; // ✅
```

---

### Summary of Concepts Covered

* ✅ Generic Functions
* ✅ Type Guards (`isObj`)
* ✅ Logical Evaluation with Extra Rules (`isTrue`)
* ✅ Interface-based Constraints
* ✅ `keyof` and Indexed Access Types
* ✅ Generic Classes with Encapsulation

---

## 📘 Utility Types

### 1. `Partial<Type>`

Makes all properties in `Type` optional.

```ts
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "ntm",
  title: "Computer Graphics",
  grade: 90,
};

console.log(updateAssignment(assign1, { grade: 100 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 100 });
```

---

### 2. `Required<Type>` and `Readonly<Type>`

* `Required<Type>`: Makes all properties required.
* `Readonly<Type>`: Makes all properties immutable.

```ts
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  return assign;
};

const assignVerified: Readonly<Assignment> = { ...assignGraded, verified: true };
// assignVerified.grade = 90; // ❌ Error: Readonly

recordAssignment({ ...assign1, verified: true });
```

---

### 3. `Record<Keys, Type>`

Constructs an object type with keys of type `Keys` and values of type `Type`.

```ts
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type studentName = "azraf" | "sami";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<studentName, LetterGrades> = {
  azraf: "A",
  sami: "B",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<studentName, Grades> = {
  azraf: { assign1: 90, assign2: 93 },
  sami: { assign1: 85, assign2: 98 },
};
```

---

### 4. `Pick<Type, Keys>` and `Omit<Type, Keys>`

* `Pick` creates a type by picking specific keys.
* `Omit` creates a type by omitting specific keys.

```ts
type AssignmentResult = Pick<Assignment, "studentId" | "grade">;
const score: AssignmentResult = {
  studentId: "ntm",
  grade: 100,
};

type AssignmentPreview = Omit<Assignment, "grade" | "verified">;
const preview: AssignmentPreview = {
  studentId: "ntm",
  title: "Test Project",
};
```

---

### 5. `Exclude<Type, ExcludedUnion>` and `Extract<Type, Union>`

* `Exclude`: Excludes types from a union.
* `Extract`: Extracts matching types from a union.

```ts
type adjustGrades = Exclude<LetterGrades, "U">; // "A" | "B" | "C" | "D"
type highGrades = Extract<LetterGrades, "A" | "B">; // "A" | "B"
```

---

### 6. `NonNullable<Type>`

Removes `null` and `undefined` from a type.

```ts
type AllPossibleGrades = "ntm" | "sas" | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>; // "ntm" | "sas"
```

---

### 7. `ReturnType<Type>`

Extracts the return type of a function.

```ts
type newAssign = { title: string; point: number };
const createNewAssign = (title: string, point: number): newAssign => {
  return { title, point };
};

type newAssign2 = ReturnType<typeof createNewAssign>;
const tAssign: newAssign2 = createNewAssign("Utility Types", 100);
console.log(tAssign);
```

---

### 8. `Parameters<Type>`

Extracts the parameter types of a function as a tuple.

```ts
type AssignParams = Parameters<typeof createNewAssign>;
const assignArgs: AssignParams = ["Image Processing Project", 100];
const tAssign2: newAssign = createNewAssign(...assignArgs);
console.log(tAssign2);
```

---

### 9. `Awaited<Type>`

Helps retrieve the resolved type inside a `Promise`.

```ts
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .catch((err) => {
      if (err instanceof Error) {
        console.log(err.message);
      }
    });

  return data;
};

// Awaited extracts User[] from Promise<User[]>
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;
fetchUsers().then((users) => console.log(users));
```
