console.log(2==1); // false
console.log(2!=1); // true
console.log(2>1); // true
console.log(2<1); // false
console.log(2>=1); // true
console.log(2<=1); // false
console.log('Z'>'A'); // true
console.log('Z'>'a'); // false
console.log('Z'<'a'); // true
console.log('Z'=='a'); // false
console.log('Z'!='a'); // true
// When we compare values. always remember both are same type. otherwise it will return false.
console.log(2 =='2'); // true

// The output of console.log(2 == '2'); is true because the == operator in JavaScript performs type coercion.
// This means it converts the operands to the same type before making the comparison.
// In this case, the string '2' is converted to the number 2, and then the comparison 2 == 2 is made, which is true.


//  If you want to avoid type coercion and ensure that both the value and type are the same,
//  you should use the strict equality operator ===. For example:
// console.log(2 === '2'); // false

console.log("2">1); // true
console.log("2"<1); // false
console.log(null>0);
console.log(null==0);
console.log(null>=0);
