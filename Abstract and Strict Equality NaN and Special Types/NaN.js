// Whenever you want to show which is not a number NaN

console.log(NaN == NaN); //false
console.log(NaN === NaN); //false

console.log(Number("123")); //123
console.log(Number("abc")); //NaN

let x = 123;
let y = "Anshu";
// check weather x is NaN or not
console.log(isNaN(x));
console.log(isNaN(y)); //isNaN converts the incoming input to a number
