## Table of Contents 

---

## 📘 Basic Concepts & Types

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

## 📘 Arrays, Tuples, and Type Safety

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






