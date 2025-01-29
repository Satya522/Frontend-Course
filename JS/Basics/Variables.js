// Variables in JavaScript

// Variable ko hum ek container ki tarah samajh sakte hain jisme hum data store kar sakte hain.
// JavaScript mein variables declare karne ke liye hum var, let, ya const keywords ka use karte hain.

// var keyword se variable declare karna (ye purana tareeka hai)
var name = "Rahul"; // isse hum kisi bhi type ka data assign kar sakte hain aur baad mein change bhi kar sakte hain
var age = 25;

// let keyword se variable declare karna (ye naya tareeka hai aur block scope follow karta hai)
let city = "Mumbai"; // isse bhi hum kisi bhi type ka data assign kar sakte hain aur baad mein change bhi kar sakte hain
let isStudent = true;

// const keyword se variable declare karna (ye bhi naya tareeka hai aur block scope follow karta hai, lekin isse
// hum baad mein change nahi kar sakte)
const country = "India"; // isse hum ek baar assign karne ke baad change nahi kar sakte

// Example of variable reassignment
name = "Amit"; // var aur let se declare kiye gaye variables ko hum baad mein change kar sakte hain
city = "Delhi";

// const se declare kiye gaye variable ko change karne ki koshish karenge to error aayegi
// country = "USA"; // Uncaught TypeError: Assignment to constant variable.

// Variables ko declare karte waqt kuch rules follow karne padte hain:
// 1. Variable ka naam alphabet ya underscore (_) se start hona chahiye.
// 2. Variable ka naam kisi reserved keyword (jaise var, let, const, etc.) se match nahi hona chahiye.
// 3. Variable ka naam case-sensitive hota hai, matlab 'name' aur 'Name' do alag variables hain.

// Example of invalid variable names
// var 1name = "John"; // SyntaxError: Invalid or unexpected token
// var var = "John"; // SyntaxError: Unexpected token 'var'

// Example of valid variable names
var _name = "John";
var $name = "John";
var name1 = "John";

// Variables ko hum functions ke andar bhi declare kar sakte hain
function greet() {
  let greeting = "Hello, " + name;
  console.log(greeting);
}

greet(); // Output: Hello, Amit

// Summary:
// - var, let, aur const keywords ka use karke variables declare karte hain.
// - var aur let se declare kiye gaye variables ko baad mein change kar sakte hain, lekin const se declare kiye gaye variables ko nahi.
// - let aur const block scope follow karte hain, jabki var function scope follow karta hai.


// Important Points:
// - Variables are used to store data in JavaScript.    
// - JavaScript variables are declared using the var, let, or const keyword.
// - The var keyword is used to declare variables in the old way.
// - The let keyword is used to declare variables that can be reassigned.
// - The const keyword is used to declare variables that cannot be reassigned.
// - Variables must follow certain rules while declaring them.
// - Variables can be declared inside functions as well.
function hello(){
  // let name = "Sattu";
  console.log(name);

  name = "Rahul"; // you can reassign it
    console.log(name);
}

hello();

