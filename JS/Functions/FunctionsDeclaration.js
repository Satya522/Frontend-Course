/*
function printMe(){
    console.log("Hello World");
}
printMe();
*/

/*function printThis(parameter){
    console.log("Hello "+ parameter);
}
printThis("Satya");*/

/*const printMe = function (){
    console.log("Hello World");
}*/

// Function Expression
/*const printMeAgain = function (){
    console.log("Hello World Again");
}
printMeAgain();*/

/*
const Sum = function (a,b){
    return a+b;
}
console.log(Sum(2,3));
*/

// default parameters
/*
function calc(a,b){
    return (2*(a+b));
}
*/

// console.log(calc(2,2));
// if we pass only one argument then it will give NaN
// console.log(calc(2)); // NaN
// to avoid this we can set a default value for a or b
/*
function calc(a=0,b){
    return (2*(a+b));
}

console.log(calc(2)); // NaN
// if you set default value for a = 0 then it will give NaN
*/
// to avoid this we always set default value for b

function calc(a,b=0){
    return (2*(a+b));
}

console.log(calc(2));  // 4









