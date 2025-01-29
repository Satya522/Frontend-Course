/*
JavaScript Strings
A string in JavaScript is a sequence of characters used to represent text.
Strings are immutable, meaning once they are created, they cannot be changed.
However, you can create new strings based on operations performed on existing strings.
* */

// 1. Creating Strings
// We can create a string using single quote (''), double quote ("") or backticks (``).

// let singleQuote = 'Hello, World';
// let doubleQuote = "Hello, World";
// let templateLiteral = `Hello, World`;

// 2. String Length
// The length property of a string returns the number of characters in the string.
// let string = 'Hello, World';
// console.log(string.length);
// // 3.charAt(index): Returns the character at the specified index.
// console.log(string.charAt(0));

// 4.concat(string2, string3, ..., stringN): Concatenates the string
// arguments to the calling string and returns a new string.
// let str1 = "Hello";
// let str2 = "World";
// let str3 = "50";
// console.log(str1.concat(" ", str2, " ", str3))
//

// 5. IndexOf(searchValue, startIndex): Returns the index of the first occurrence of the specified value in a string.

// let name = "Satya";
// let index  = name.indexOf("t");
// console.log(index);
//
// // 6. lastIndexOf(searchValue, startIndex): Returns the index of the last occurrence of the specified value in a string.
// let name1 = "Satya";
// let index1  = name1.lastIndexOf("a");
// console.log(index1);

/*
// 7. slice(startIndex, endIndex): Extracts a section of a string and returns a new string.
let name2 = "Satya";
let newName = name2.slice(1, 4);
console.log(newName);
// isme 1 se 4 tak ka string return karega lekin index 4 wala character include nhi karega
*/

/*
// 8. substring(startIndex, endIndex): Extracts a section of a string and returns a new string.
let name3 = "Satya";
let newName1 = name3.substring(1, 4);
console.log(newName1);
*/

/*
// 9. substr(startIndex, length): Extracts a section of a string and returns a new string.
let name4 = "Satya";
let newName2 = name4.substr(1, 4);
console.log(newName2); // atya
*/

// const  newString = "     Sattu Kumar      ";
// console.log(newString);
// console.log(newString.trim());

// 10. toLowerCase(): Converts a string to lowercase letters.

// const name = "Satya";
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());


// 11. Hum string se ask bhi kar sakte hai ki kya ye string number hai ya nhi, kya is string me ye character hai ya nhi
// const name = "Satya";
// console.log(name.includes("a", 1)); // true
// console.log(name.includes("z")); // false

// 12. split(separator, limit): Splits a string into an array of substrings.
// split() method ka istemal karke hum string ko array me convert kar sakte hai
const name = "Satyendra Kumar Vishwakarma";
const nameArray = name.split(" ");
console.log(nameArray); // [ 'Satyendra', 'Kumar', 'Vishwakarma' ]
