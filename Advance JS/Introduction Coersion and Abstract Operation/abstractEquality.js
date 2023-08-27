// == abstract equality
// === strict equality

// Abstract Equality Comparison
// The comparison x == y, where x and y are values, produces true or false. Such a comparison is performed as follows:

// 1 If Type(x) is the same as Type(y), then
// Return the result of performing Strict Equality Comparison x === y.
// 2 If x is null and y is undefined, return true.
// 3 If x is undefined and y is null, return true.
// 4 If Type(x) is Number and Type(y) is String, return the result of the comparison x == ! ToNumber(y).
// 5 If Type(x) is String and Type(y) is Number, return the result of the comparison ! ToNumber(x) == y.
// 6 If Type(x) is Boolean, return the result of the comparison ! ToNumber(x) == y.
// 7 If Type(y) is Boolean, return the result of the comparison x == ! ToNumber(y).
// 8 If Type(x) is either String, Number, or Symbol and Type(y) is Object, return the result of the comparison x == ToPrimitive(y).
// 9 If Type(x) is Object and Type(y) is either String, Number, or Symbol, return the result of the comparison ToPrimitive(x) == y.
// 10 Return false.

// both checks type, if you say the == doesn't check the type than your wrong, but what they do with it, depends
//abstract equality check the coersion

// console.log(null == undefined);
// console.log(null === undefined);

// console.log("23" == 23); //convert 23 to number and again compare it
// console.log(23 == "23"); //convert 23 to number and again compare it

// console.log(false == "0");

// false -> Boolean -> ToNumber -> false -> 0
//"0"
//"0" we will convert it to number again so it become 0 and then check 0 == 0 true
// if x(left side) is Number, string, and symbol and y(right side) is object than x == ToPrimitive(y)

// 8 If Type(x) is either String, Number, or Symbol and Type(y) is Object, return the result of the comparison x == ToPrimitive(y).
// 9 If Type(x) is Object and Type(y) is either String, Number, or Symbol, return the result of the comparison ToPrimitive(x) == y.

let obj = {
  x: 10,
  valueOf() {
    return 99; //when you call obj it will return 99 only
  },
};

console.log(obj == 99);
console.log(100 == obj);

console.log(typeof null); //object
//it's historical mistake by JavaScript. if we change it than many code base and website created will dismissed so we can't change it.

let one = {};
let two = {};

console.log(one == two); //false
console.log(two == one); //false
console.log(one === two); //false
console.log(two === one); //false

console.log(one == one); //true
console.log(one === one); //true




