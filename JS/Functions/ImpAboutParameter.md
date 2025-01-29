### Default Parameter in JavaScript

#### What is Default Parameter?
Default parameters allow you to initialize function parameters with default values if no value or `undefined` is passed.

#### Why We Use Default Parameter?
- **Avoid Undefined Values**: Ensures that function parameters have valid values.
- **Simplifies Code**: Reduces the need for additional checks and assignments within the function body.

#### When We Use Default Parameter?
- **Optional Parameters**: When some parameters are optional and should have a default value if not provided.
- **Fallback Values**: When you want to provide a fallback value for parameters.

#### Example Usage
```javascript
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}

console.log(greet()); // Output: Hello, Guest!
console.log(greet('Alice')); // Output: Hello, Alice!
```

#### Limitations of Default Parameter
- **Order Matters**: Default parameters should be placed after required parameters to avoid unexpected behavior.
- **Not a Substitute for Validation**: Default parameters do not replace the need for proper input validation.

In summary, default parameters enhance function flexibility and readability by providing default values for parameters, ensuring that functions can handle missing or `undefined` arguments gracefully.
### Rest Parameter in JavaScript

#### What is Rest Parameter?
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array. It is denoted by three dots (`...`) followed by the parameter name.

#### Why We Use Rest Parameter?
- **Flexibility**: It allows functions to handle an arbitrary number of arguments.
- **Simplifies Code**: It makes the code cleaner and more readable by avoiding the need to use the `arguments` object.

#### When We Use Rest Parameter?
- **Variable Number of Arguments**: When a function needs to handle a variable number of arguments.
- **Combining Arguments**: When you want to combine multiple arguments into a single array.

#### Example Usage
```javascript
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22
```

#### When Not to Use Rest Parameter?
- **Fixed Number of Arguments**: When the function is expected to always receive a fixed number of arguments.
- **Performance Concerns**: In performance-critical code, as creating an array from arguments can have a slight overhead.

#### Limitations of Rest Parameter
- **Must Be Last Parameter**: The rest parameter must be the last parameter in the function definition.
- **Not Compatible with `arguments` Object**: The rest parameter cannot be used with the `arguments` object.

#### Example of Limitation
```javascript
function example(a, b, ...rest, c) {
    // SyntaxError: Rest parameter must be last formal parameter
}
```

In summary, the rest parameter is a powerful feature in JavaScript that provides flexibility in handling function arguments, but it should be used appropriately considering its limitations.