// Loops in JavaScript

// What are Loops?
// Loops are used to repeatedly execute a block of code as long as a specified condition is true.
// They help in reducing code redundancy and make it easier to perform repetitive tasks.

// Why use Loops?
// 1. To automate repetitive tasks.
// 2. To iterate over arrays, objects, or other iterable data structures.
// 3. To perform operations on each element of a collection.
// 4. To execute a block of code multiple times with different values.

// Types of Loops in JavaScript:

// 1. For Loop
// Fixed number of iterations ke liye for loop ka use karte hain.
for (let i = 0; i < 5; i++) {
  console.log("For Loop Iteration number: " + i);
}

// 2. While Loop
// Jab tak condition true hai tab tak loop execute hota rahega.
let count = 0;
while (count < 5) {
  console.log("While Loop Count is: " + count);
  count++;
}

// 3. Do-While Loop
// Pehle loop execute hota hai, phir condition check hoti hai.
let num = 0;
do {
  console.log("Do-While Loop Number is: " + num);
  num++;
} while (num < 5);

// 4. For-In Loop
// For-in loop ka use objects ke properties ko iterate karne ke liye hota hai.
let person = {
  name: "John",
  age: 30,
  city: "New York"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

// 5. For-Of Loop
// For-of loop ka use arrays ya iterable objects ko iterate karne ke liye hota hai.
let colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}

// Advantages of Using Loops:
// 1. Code Reusability: Loops allow you to write a block of code once and reuse it multiple times.
// 2. Efficiency: Loops can handle repetitive tasks efficiently without writing redundant code.
// 3. Flexibility: Loops can be used to iterate over different data structures like arrays, objects, and strings.
// 4. Automation: Loops help in automating tasks that require repetitive actions, saving time and effort.

// Summary:
// - For Loop: Fixed iterations ke liye use hota hai.
// - While Loop: Jab tak condition true hai tab tak execute hota hai.
// - Do-While Loop: Pehle execute hota hai, phir condition check hoti hai.
// - For-In Loop: Objects ke properties ko iterate karne ke liye use hota hai.
// - For-Of Loop: Arrays ya iterable objects ko iterate karne ke liye use hota hai.