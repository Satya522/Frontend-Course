/*
Data types in JavaScript:

Number: Represents both integer and floating-point numbers.
String: Represents a sequence of characters.
Boolean: Represents true or false.
Undefined: Represents a variable that has been declared but not assigned a value.
Null: Represents the intentional absence of any object value.
Object: Represents collections of properties.
Symbol: Represents a unique and immutable primitive value.
BigInt: Represents integers with arbitrary precision.

*/

// Number
let age = 19;
let pi = 3.14;

// String
let name = "Satya";

// Boolean
let isStudent = true;

// Undefined
let state;

// Null
let temp = null;

// Object
let person = {
  firstName: "Satya",
  lastName: "Kumar"
};

// Symbol
let sym = Symbol('unique');

// BigInt
let bigIntNumber = 1234567890123456789012345678901234567890n;


// To display the values of these variables, we can use the console.log() method.
console.table([age, pi, name, isStudent, state, temp, person, sym, bigIntNumber]);

// To check the data type of a variable, we can use the typeof operator.
console.table([typeof age, typeof pi, typeof name, typeof isStudent, typeof state, typeof temp, typeof person, typeof sym, typeof bigIntNumber]);

