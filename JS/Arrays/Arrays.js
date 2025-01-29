// const fruits = ["Apple", "Banana", "Orange", "Mango"];
// console.log(fruits);
// Output: ["Apple", "Banana", "Orange", "Mango"]

// Using new Array() Constructor
/*
const fruits = new Array("Apple", "Banana", "Orange");
console.log(fruits);
*/

// const numbers = [1,2,3,4,5];
// console.log(numbers[0]);
// console.log(numbers[1]);

// In js Arrays are dynamic size hota hai aap element ko remove aur add kar sakte hai


// =============================== Deep knowledge ================================

let numbers = [1,2,4,8];

console.log(numbers);

// Add element to the array
// numbers[4] = 5;
// console.log(numbers);

// We have push() method to add element to the array
// numbers.push(25);
// console.log(numbers);

// We have unshift() method to add element to the array at the beginning position
// numbers.unshift(10);
// console.log(numbers);

// // length property of array  we can use .length
// console.log("length of array is: "+numbers.length);

// remove element from the array we can use pop() method remove the element from the end of the array
//
// numbers.pop();
// console.log(numbers);

// remove element from the array we can use shift() method remove the element from the beginning of the array

// numbers.shift();
// console.log(numbers);

/*
splice() method JavaScript mein array ke elements ko add ya remove karne ke liye use hota hai. Yeh method array
 ko modify karta hai aur removed elements ko return karta hai.

syntax: array.splice(index, deleteCount, item1, item2, ..., itemN)

Parameters:
   1.start: Yeh index hai jahan se changes start honge. Agar yeh negative hai, to yeh array ke end se count hota hai.
   2.deleteCount: Kitne elements ko remove karna hai. Agar yeh 0 hai, to koi element remove nahi hoga.
   3.item1, item2, ..., itemN: Yeh optional parameters hain jo array mein add kiye jayenge.
Examples:

 */

// 1. Remove elements from the array
// let fruits = ["Apple", "Banana", "Orange", "Mango"];
// fruits.splice(1, 2); // Index 1 se 2 elements remove karega
// console.log(fruits); // Output: ["Apple", "Mango"]

// // 2. Add elements to the array
// let fruits1 = ["Apple", "Banana", "Orange", "Mango"];
//
// fruits1.splice(1,0,"Pineapple","Kiwi"); // Index 1 pe Pineapple aur Kiwi add karega
// console.log(fruits1); // Output: ["Apple", "Pineapple", "Kiwi", "Banana", "Orange", "Mango"]

// 3. Replace elements in the array
let fruits2 = ["Apple", "Banana", "Orange", "Mango"];
fruits2.splice(2, 1, "Watermelon", "Kiwi"); // Index 2 pe Orange ko remove karke Watermelon aur Kiwi add karega
console.log(fruits2); // Output: ["Apple", "Banana", "Watermelon", "Kiwi", "Mango"]
