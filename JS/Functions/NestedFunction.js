// Nested Function: A Function inside another Function is called Nested Function.
// The inner (nested) function can access variables and parameters of its outer function due to the scope chain.
// Outer Function can not access the variables and parameters of the inner function.

/*
Features of Nested Functions

Inner Function Access:

The inner function can access:
--> Its own variables.
--> Variables and parameters of the outer function.
--> Variables from the global scope.

Outer Function's Scope:

The outer function cannot access variables declared inside the inner function.

Use Case:
Nested functions are useful for encapsulation and modularity.
They help in data hiding by restricting access to variables within the nested function.
*/

function outerFunction(outerVariable){
    console.log("Outer Function is Running");
    function innerFunction(innerVariable){
        console.log(`Outer Variable: ${outerVariable}`);
        console.log(`Inner Variable: ${innerVariable}`);
    }
    innerFunction("Inner Value");
}
outerFunction("Outer Value");





