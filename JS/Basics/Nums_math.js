// Objective: Learn about the Number object and Math object in JavaScript

// +++++++++++++++++++++NUMBER+++++++++++++++++++++++++++

// The Number object is a wrapper object that allows you to work with numbers. It provides various methods and properties for working with numbers in JavaScript.

const score = 400;
console.log(score);

// Create a new Number object with the value 1000 and assign it to 'balance'
const balance = new Number(1000);
// Log the 'balance' object to the console
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2));

// The toPrecision method formats a number to a specified length (number of significant digits).
// It is useful when you need to control the number of significant digits in a number, for example, when displaying financial data or scientific measurements.

const aNumber = 23.8966;
console.log(aNumber.toPrecision(3)); // Logs '23.9' - the number is rounded to 3 significant digits

const bNumber = 123.8966;
console.log(bNumber.toPrecision(3)); // Logs '124' - the number is rounded to 3 significant digits

const cNumber = 1123.8966;
console.log(cNumber.toPrecision(3)); // Logs '1.12e+3' - the number is formatted in exponential notation with 3 significant digits

// Explanation:
// - aNumber.toPrecision(3): The number 23.8966 is rounded to 3 significant digits, resulting in '23.9'.
// - bNumber.toPrecision(3): The number 123.8966 is rounded to 3 significant digits, resulting in '124'.
// - cNumber.toPrecision(3): The number 1123.8966 is formatted in exponential notation with 3 significant digits, resulting in '1.12e+3'.
// The toPrecision method is particularly useful when you need to ensure that a number is displayed with a specific number of significant digits, which can be important in various fields such as finance, engineering, and science.

const tenLakhsInUS = 1000000;
console.log(tenLakhsInUS.toLocaleString());  // default locale is 'en-US' but if we want in indian format then we can pass 'en-IN' as a parameter

const tenLakhsInIndia = 1000000;
console.log(tenLakhsInIndia.toLocaleString('en-IN'));

// +++++++++++++++++++++MATH+++++++++++++++++++++++++++

// Math is a built-in object in JavaScript that provides mathematical functions and constants.
// It allows you to perform mathematical operations like rounding, logarithms, trigonometry, and more.

// Math.PI - The ratio of the circumference of a circle to its diameter, approximately 3.14159.
console.log(Math.PI); // Logs 3.141592653589793

// Math.round() - Rounds a number to the nearest integer.
console.log(Math.round(4.7)); // Logs 5
console.log(Math.round(4.4)); // Logs 4

// Math.ceil() - Rounds a number up to the next largest integer.
console.log(Math.ceil(4.1)); // Logs 5

// Math.floor() - Rounds a number down to the next smallest integer.
console.log(Math.floor(4.9)); // Logs 4

// Math.sqrt() - Returns the square root of a number.
console.log(Math.sqrt(16)); // Logs 4

// Math.abs() - Returns the absolute value of a number.
console.log(Math.abs(-5)); // Logs 5

// Math.pow() - Returns the base to the exponent power, that is, base^exponent.
console.log(Math.pow(2, 3)); // Logs 8

// Math.min() - Returns the smallest of zero or more numbers.
console.log(Math.min(0, 150, 30, 20, -8, -200)); // Logs -200

// Math.max() - Returns the largest of zero or more numbers.
console.log(Math.max(0, 150, 30, 20, -8, -200)); // Logs 150

// Math.random() - Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random()); // Logs a random number between 0 and 1

// Math.log() - Returns the natural logarithm (base e) of a number.
console.log(Math.log(1)); // Logs 0

// Math.exp() - Returns e^x, where x is the argument, and e is Euler's number (approximately 2.718).
console.log(Math.exp(1)); // Logs 2.718281828459045

// Math.sin() - Returns the sine of a number (angle in radians).
console.log(Math.sin(Math.PI / 2)); // Logs 1

// Math.cos() - Returns the cosine of a number (angle in radians).
console.log(Math.cos(Math.PI)); // Logs -1

// Math.tan() - Returns the tangent of a number (angle in radians).
console.log(Math.tan(Math.PI / 4)); // Logs 1

// Math.asin() - Returns the arcsine (in radians) of a number.
console.log(Math.asin(1)); // Logs 1.5707963267948966 (π/2)

// Math.acos() - Returns the arccosine (in radians) of a number.
console.log(Math.acos(1)); // Logs 0

// Math.atan() - Returns the arctangent (in radians) of a number.
console.log(Math.atan(1)); // Logs 0.7853981633974483 (π/4)

// Math.hypot() - Returns the square root of the sum of squares of its arguments.
console.log(Math.hypot(3, 4)); // Logs 5

// Math.cbrt() - Returns the cube root of a number.
console.log(Math.cbrt(27)); // Logs 3

// Math.sign() - Returns the sign of a number, indicating whether the number is positive, negative or zero.
console.log(Math.sign(-5)); // Logs -1
console.log(Math.sign(0)); // Logs 0
console.log(Math.sign(5)); // Logs 1


