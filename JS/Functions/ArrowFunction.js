/*
// traditional function
function  add(x,y){
    return x+y;
}
// Arrow function
const  sum = (x,y) => {
    return x+y;
}
console.log(sum(2,3)); // 5


// Arrow function without Parameters
// traditional function
function sayHello(){
    return "HelloWorld";
}
// arrow function
const sayHello = () => {
    return "HelloWorld";
}
*/

// Arrow function with single parameter
// traditional function
function sqr(n){
    return n*n;
}
// arrow function
const square = n => n*n;
console.log(square(5)); // 25

// Arrow Function and this keyword
// traditional function
/*function person(){
    this.age = 0;
    setInterval(function(){
        this.age++;
        console.log(this.age);
    },1000);
}*/
// arrow function
function person(){
    this.age = 0;
    setInterval(() => {
        this.age++;
        console.log(this.age);
    },10);
}
person();
