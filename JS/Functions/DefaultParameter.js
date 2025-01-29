// Default Parameter
// Default Parameter is a feature of ES6 that allows you to initialize a function with default values if no value is
// passed to it.
// In the following example, if you don't pass any value to the function, it will take the default value of 10.
// If you pass a value to the function, it will take that value.
// Example
function multiply(a, b = 10) {
   return a * b;
}
console.log(multiply(5, 2)); // Output: 10
console.log(multiply(5)); // Output: 50
// In the above example, the function multiply takes two parameters a and b. The default value of b is 10.
// If you pass only one value to the function, it will take the default value of b and return the result of a * b.
// If you pass two values to the function, it will take the value of b that you passed and return the result of a * b.

