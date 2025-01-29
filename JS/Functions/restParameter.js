/*
Rest Parameter?
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array. It is denoted by three dots (`...`) followed by the parameter name.

Why We Use Rest Parameter?
Flexibility: It allows functions to handle an arbitrary number of arguments.
Simplifies Code: It makes the code cleaner and more readable by avoiding the need to use the `arguments` object.

When We Use Rest Parameter?
Variable Number of Arguments: When a function needs to handle a variable number of arguments.
Combining Arguments: When you want to combine multiple arguments into a single array.
Example Usage
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22

When Not to Use Rest Parameter?
Fixed Number of Arguments: When the function is expected to always receive a fixed number of arguments.
Performance Concerns: In performance-critical code, as creating an array from arguments can have a slight overhead.

Limitations of Rest Parameter
Must Be Last Parameter: The rest parameter must be the last parameter in the function definition.
Not Compatible with `arguments` Object**: The rest parameter cannot be used with the `arguments` object.

Example of Limitation
function example(a, b, ...rest, c) {
    // SyntaxError: Rest parameter must be last formal parameter
}
In summary, the rest parameter is a powerful feature in JavaScript that provides flexibility in handling function arguments, but it should be used appropriately considering its limitations.
*/


function Collect(x,...y){
    console.log(x,y);
}
Collect(1,2,3,4,5,6,7,8,9,10); // Output: 1 2 [3, 4, 5, 6, 7, 8, 9, 10]
