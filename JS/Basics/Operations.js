// Arithmetic Operations
let a = 10;
let b = 3;

// Addition
let sum = a + b;
console.log(sum); // Output: 13

// Subtraction
let difference = a - b;
console.log(difference); // Output: 7

// Multiplication
let product = a * b;
console.log(product); // Output: 30

// Division
let quotient = a / b;
console.log(quotient); // Output: 3.3333333333333335

// Modulus
let remainder = a % b;
console.log(remainder); // Output: 1

// Increment
let x = 5;
x++;
console.log(x); // Output: 6

// Decrement
let y = 5;
y--;
console.log(y); // Output: 4

// Comparison Operations
/*
JavaScript supports the following comparison operations:
1. Equal to (==): Compares two values for equality.
2. Not equal to (!=): Compares two values for inequality.
3. Greater than (>): Checks if one value is greater than another.
4. Less than (<): Checks if one value is less than another.
5. Greater than or equal to (>=): Checks if one value is greater than or equal to another.
6. Less than or equal to (<=): Checks if one value is less than or equal to another.
*/

// Equal to
let isEqual = 5 == 5;
console.log(isEqual); // Output: true

// Not equal to
let isNotEqual = 5 != 3;
console.log(isNotEqual); // Output: true

// Greater than
let isGreater = 5 > 3;
console.log(isGreater); // Output: true

// Less than
let isLess = 5 < 3;
console.log(isLess); // Output: false

// Greater than or equal to
let isGreaterOrEqual = 5 >= 5;
console.log(isGreaterOrEqual); // Output: true

// Less than or equal to
let isLessOrEqual = 5 <= 3;
console.log(isLessOrEqual); // Output: false

// Logical Operations
/*
JavaScript supports the following logical operations:
1. AND (&&): Returns true if both operands are true.
2. OR (||): Returns true if at least one operand is true.
3. NOT (!): Returns true if the operand is false.
*/

// AND
let andResult = true && false;
console.log(andResult); // Output: false

// OR
let orResult = true || false;
console.log(orResult); // Output: true

// NOT
let notResult = !true;
console.log(notResult); // Output: false

// Bitwise Operations
/*
JavaScript supports the following bitwise operations:
1. AND (&): Performs a bitwise AND.
2. OR (|): Performs a bitwise OR.
3. XOR (^): Performs a bitwise XOR.
4. NOT (~): Performs a bitwise NOT.
5. Left Shift (<<): Shifts bits to the left.
6. Right Shift (>>): Shifts bits to the right.
7. Zero-fill Right Shift (>>>): Shifts bits to the right with zero fill.
*/

// Bitwise AND
let bitwiseAnd = 5 & 1;
/*
5 in binary: 101
1 in binary: 001
AND: 001

 basically & operation when we add 1 + 1 = 1, 1 + 0 = 0, 0 + 1 = 0, 0 + 0 = 0
 so 1+1 = 1, 0+0 = 0, 1+0 = 0 that's why 5 & 1 = 1

    101
  & 001
   -----
    001
   -----

*/
console.log(bitwiseAnd); // Output: 1

// Bitwise OR
let bitwiseOr = 5 | 1;
/*

5 in binary: 101
1 in binary: 001
OR: 101

    basically | operation when we add 1 + 1 = 1, 1 + 0 = 1, 0 + 1 = 1, 0 + 0 = 0
    so 1+1 = 1, 0+0 = 0, 1+0 = 1 that's why 5 | 1 = 5

   5 | 1 = 5
    101
  | 001
   -----
    101
   -----
* */
console.log(bitwiseOr); // Output: 5

// Bitwise XOR
let bitwiseXor = 5 ^ 1;
/*
5 in binary: 101
1 in binary: 001
XOR: 100

    basically ^ operation when we add 1 + 1 = 0, 1 + 0 = 1, 0 + 1 = 1, 0 + 0 = 0
    so 1+1 = 0, 0+0 = 0, 1+0 = 1 that's why 5 ^ 1 = 4

    101
  ^ 001
   -----
    100
   -----
* */
console.log(bitwiseXor); // Output: 4

// Bitwise NOT
let bitwiseNot = ~5;
/*
5 in binary: 101
NOT: -6

    basically ~ operation when we add 1 + 1 = 0, 0 + 0 = 1
    so 1 = 0, 0 = 1 that's why ~5 = -6

    ~5 = -6
        101
    ~
       -110
* */
console.log(bitwiseNot); // Output: -6

// Left Shift
let leftShift = 5 << 1;
/**
5 in binary: 101
Left Shift by 1: 1010

    basically << operation when we add 1 + 0 = 1, 0 + 1 = 0
    so 1 = 0, 0 = 1 that's why 5 << 1 = 10

    101
 << 1
 -----
  1010
 -----
* */
console.log(leftShift); // Output: 10

// Right Shift
let rightShift = 5 >> 1;
console.log(rightShift); // Output: 2

// Zero-fill Right Shift
let zeroFillRightShift = 5 >>> 1;
console.log(zeroFillRightShift); // Output: 2

// Assignment Operations
/*
JavaScript supports the following assignment operations:
1. Assignment (=): Assigns a value to a variable.
2. Addition Assignment (+=): Adds a value to a variable and assigns the result.
3. Subtraction Assignment (-=): Subtracts a value from a variable and assigns the result.
4. Multiplication Assignment (*=): Multiplies a variable by a value and assigns the result.
5. Division Assignment (/=): Divides a variable by a value and assigns the result.
6. Modulus Assignment (%=): Performs modulus on a variable and assigns the result.
*/

// Assignment
let z = 10;

// Addition Assignment
z += 5;
console.log(z); // Output: 15

// Subtraction Assignment
z -= 3;
console.log(z); // Output: 12

// Multiplication Assignment
z *= 2;
console.log(z); // Output: 24

// Division Assignment
z /= 4;
console.log(z); // Output: 6

// Modulus Assignment
z %= 3;
console.log(z); // Output: 0

// Ternary Operator
/*
The ternary operator is a shorthand way of writing an if-else statement in JavaScript. It takes three operands: a condition, an expression to evaluate if the condition is true, and an expression to evaluate if the condition is false.
*/

let age = 20;
let isAdult = age >= 18 ? "Adult" : "Minor";
console.log(isAdult); // Output: "Adult"

// Typeof Operator
/*
The typeof operator is used to determine the data type of a value or variable in JavaScript. It returns a string indicating the type of the operand.
*/

let dataType = typeof 5;
console.log(dataType); // Output: "number"

dataType = typeof "Hello";
console.log(dataType); // Output: "string"

// === vs ==
/*
JavaScript has two comparison operators that are used to compare values: the strict equality operator (===) and the equality operator (==).
The strict equality operator (===) compares both the value and the data type of the operands. It returns true if both are equal
The equality operator (==) compares only the value of the operands. It performs type coercion if the operands are of different data types.
example:
 // Using == (equality operator)
let a = 5;
let b = "5";

console.log(a == b); // Output: true
// Explanation: The == operator performs type coercion, so it converts the string "5" to the number 5 before comparing.

// Using === (strict equality operator)
console.log(a === b); // Output: false
// Explanation: The === operator does not perform type coercion, so it compares both the value and the type. Since a
 is a number and b is a string, they are not strictly equal.
 */