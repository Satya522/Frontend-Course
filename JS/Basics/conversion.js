// *************************** Conversion ***************************
/*
Conversion operations in JavaScript refer to the process of converting a value from one data type to another. This is often necessary when performing operations that require values to be in a specific format. There are several types of conversion operations:

String to Number: Converting a string representation of a number to an actual number.
Number to String: Converting a number to its string representation.
String to Boolean: Converting a string to a boolean value.
Boolean to String: Converting a boolean value to its string representation.
Number to Boolean: Converting a number to a boolean value.
Boolean to Number: Converting a boolean value to a number.

JavaScript provides three functions that help you convert data types:
1. The Number() function converts a value to a number.
2. The String() function converts a value to a string.
3. The Boolean() function converts a value to a boolean.

*/


// Conversion from string to number
let str = "123";
let num = Number(str);
console.log(num); // Output: 123
console.log(typeof num); // Output: number

// Conversion from number to string
let number = 456;
let string = String(number);
console.log(string); // Output: "456"
console.log(typeof string); // Output: string

// Conversion from string to boolean
let strBool = "true";
let bool = Boolean(strBool);
console.log(bool); // Output: true
console.log(typeof bool); // Output: boolean

// Conversion from boolean to string
let boolValue = true;
let boolString = String(boolValue);
console.log(boolString); // Output: "true"
console.log(typeof boolString); // Output: string

// Conversion from number to boolean
let numBool = 0;
let boolNum = Boolean(numBool);
console.log(boolNum); // Output: false
console.log(typeof boolNum); // Output: boolean

// Conversion from boolean to number
let boolVal = true;
let numVal = Number(boolVal);
console.log(numVal); // Output: 1
console.log(typeof numVal); // Output: number




