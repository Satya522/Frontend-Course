// For Loop - when ever we know the number of iterations exactly then we use for loop
// example: 1 to 10
/*
for (let i=1;i<=10;i++){
    console.log(i);
}
// Output: number is: 1,2,3,4,5,6,7,8,9,10
*/

// while Loop - when ever we don't know the number of iterations exactly then we use while loop
// Example: 1 to 10
/*
let j=1;
while(j<=10){
    console.log(j);
    j++;
}
// Output: number is: 1,2,3,4,5,6,7,8,9,10
*/

// do while Loop - when ever we don't know the number of iterations exactly then we use do while loop
// but when ever we run our do while loop atleast once is executed
// Example: 1 to 10

/*
let k=1;
do{
    console.log(k);
    k++;
} while (k<=10)
*/

// Output: number is: 1,2,3,4,5,6,7,8,9,10

// for...of loop
// we use for...of loop to iterate over the elements of an array, string, map, set, etc.
// Syntax:
/*for(let element of iterable){
// code to be executed
}*/

/*
let fruits = ['Apple', 'banana', 'mango', 'orange'];
for(let fruit of fruits){
    console.log(fruit);
}
// Output: Apple, banana, mango, orange
*/
// for...in loop
// we use for...in loop to iterate over the properties of an object
// Syntax:
/*for(let property in object){
    // code to be executed
}*/

/*
let person = {name: 'John', age: 30, city: 'New York'};
for(let about in person){
    console.log(about + ":"+ person[about]);
}
// Output: name: John, age: 30, city: New York

*/

// Break and Continue Statements
// Break Keyword:The break statement is used to terminate a loop or a switch statement. When break is executed,
// the loop stops immediately, and control passes to the code following the loop.
// Example: 1 to 10
/*for(let i=1;i<=10;i++){
    if(i==5){
        break;
    }
    console.log(i);
}*/
// Output: 1,2,3,4

// Continue Keyword: The continue statement skips the current iteration of a loop and proceeds to the next iteration.
// Unlike break, it does not terminate the loop entirely.
// Example: 1 to 10
/*for (let i=1;i<=10;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}*/
// Output: 1,2,3,4,6,7,8,9,10

// Nested Loops
// A loop inside another loop is called a nested loop. The inner loop will be executed one time for each iteration
// of the outer loop.
// Example: 1 to 3
for(let i=1;i<=3;i++){
    for(let j=1;j<=i;j++){
        console.log(i,j);
    }
}






