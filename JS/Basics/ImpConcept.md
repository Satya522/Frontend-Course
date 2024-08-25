## Key Differences Between `var`, `let`, and `const` in JavaScript

1. **Scope**:
   - `var`: Function scope follow karta hai. Matlab, agar function ke andar declare kiya hai to sirf us function ke andar hi accessible hoga.
   - `let` aur `const`: Block scope follow karte hain. Matlab, sirf us block ke andar hi accessible hote hain jahan declare kiya gaya hai (jaise if, for loop, etc.).

2. **Hoisting**:
   - `var`: Hoisting ke time pe undefined value assign hoti hai. Matlab, variable ko declare karne se pehle bhi use kar sakte hain, lekin value undefined hogi.
   - `let` aur `const`: Hoisting ke time pe uninitialized rehte hain. Matlab, variable ko declare karne se pehle use karne ki koshish karenge to ReferenceError aayega.

3. **Re-declaration**:
   - `var`: Same scope ke andar re-declaration allow karta hai.
   - `let` aur `const`: Same scope ke andar re-declaration allow nahi karte.

4. **Initialization**:
   - `var` aur `let`: Initialization ke bina declare kiya ja sakta hai.
   - `const`: Declaration ke time pe hi initialize karna zaroori hai.

5. **Re-assignment**:
   - `var` aur `let`: New values assign kar sakte hain.
   - `const`: Ek baar initialize hone ke baad new value assign nahi kar sakte. Lekin agar `const` variable ek object ya array hai, to uske properties ya elements modify kar sakte hain.

Example:
```javascript
// var example
var x = 10;
var x = 20; // Re-declaration allowed hai
x = 30; // Re-assignment allowed hai

// let example
let y = 10;
// let y = 20; // Re-declaration allowed nahi hai
y = 20; // Re-assignment allowed hai

// const example
const z = 10;
// const z = 20; // Re-declaration allowed nahi hai
// z = 20; // Re-assignment allowed nahi hai

const obj = { a: 1 };
obj.a = 2; // Allowed hai, kyunki hum object ki property modify kar rahe hain