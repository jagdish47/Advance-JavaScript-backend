console.log("" + 0); //0 -> "0"
console.log("" + -0); //-0 -> "0"

console.log("" + []); //[] -> "";
console.log("" + {}); //[object, Object];

console.log("" + [1, 2, 3]); //1,2,3
console.log("" + [null, undefined, null, undefined]); //,,,
console.log("" + [1, 2, null, 4]); //1,2,,4

// ToNumber

console.log(0 - "010"); //-10
console.log(0 - "O10"); //NaN

console.log(0 - 0101); //0101 is converted to Octal -> -65
console.log(0 - "0xb"); //0xb is converted to Hexadecimal -> -11
console.log(0 - 0xb); //0xb is converted to Hexadecimal -> -11

console.log([] - 1); //-1 because empty array become 0
console.log(1 - []); //1
console.log([""] - 1); //-1 //[""] become zero again
console.log(["0"] - 1); //-1 //["0"] become zero again
console.log([6] - 1); //5 means js convert [6] into 6
//These cases you cannot see in Production level Code
