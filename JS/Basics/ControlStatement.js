// Control Statements in JavaScript

// 1. If Statement
// Agar condition true hai to if block execute hoga.
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}

// 2. If-Else Statement
// Agar condition true hai to if block execute hoga, warna else block execute hoga.
let isStudent = false;
if (isStudent) {
  console.log("You are a student.");
} else {
  console.log("You are not a student.");
}

// 3. Else-If Statement
// Multiple conditions check karne ke liye else-if ka use karte hain.
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// 4. Switch Statement
// Multiple conditions check karne ke liye switch statement ka use karte hain.
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// 5. For Loop
// Fixed number of iterations ke liye for loop ka use karte hain.
for (let i = 0; i < 5; i++) {
  console.log("Iteration number: " + i);
}

// 6. While Loop
// Jab tak condition true hai tab tak loop execute hota rahega.
let count = 0;
while (count < 5) {
  console.log("Count is: " + count);
  count++;
}

// 7. Do-While Loop
// Pehle loop execute hota hai, phir condition check hoti hai.
let num = 0;
do {
  console.log("Number is: " + num);
  num++;
} while (num < 5);

// 8. Break Statement
// Loop ko prematurely terminate karne ke liye break statement ka use karte hain.
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Loop yahan pe terminate ho jayega
  }
  console.log("Value of i: " + i);
}

// 9. Continue Statement
// Current iteration ko skip karne ke liye continue statement ka use karte hain.
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // Current iteration skip ho jayegi
  }
  console.log("Value of i: " + i);
}

// 10. Label Statement
// Label statement ka use nested loops ko control karne ke liye kiya jata hai.
outerloop: for (let i = 0; i < 3; i++) {
  innerloop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerloop;
    }
    console.log("i = " + i + ", j = " + j);
  }
}