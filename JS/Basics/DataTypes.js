/*
Data types in JavaScript:
1.Primitive data types
==> Number, String, Boolean, Undefined, Null, Symbol, BigInt
2.Non-primitive data types or reference data types
==> Object, Array, Function

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

// Symbol
let sym = Symbol('unique');

// BigInt
let bigIntNumber = 1234567890123456789012345678901234567890n;


// To display the values of these variables, we can use the console.log() method.
console.table([age, pi, name, isStudent, state, temp,sym, bigIntNumber]);

// To check the data type of a variable, we can use the typeof operator.
console.table([typeof age, typeof pi, typeof name, typeof isStudent, typeof state, typeof temp,typeof sym, typeof bigIntNumber]);


// Reference data types
// Arrays
let colors = ['red','green','blue','yellow'];

// functions
function greet() {
  console.log('Hello');
}
greet();

console.table([colors, greet]);


// Object
let person = {
  firstName: "Satya",
  lastName: "Kumar"
};
console.table([person]);
