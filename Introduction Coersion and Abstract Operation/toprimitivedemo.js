// toString is inbuild method of JavaScript and if you console it it will give you [Object, object] but you can override it.

let objOne = { x: 10 };
// console.log(objOne.toString()); [object, object]
// console.log(objOne.valueOf()); //{x : 10} will give you complete object

let objTwo = {
  toString() {
    return "Let's learn JavaScript";
  },

  valueOf() {
    //the default implimentation of valueOf is it will give you object.
    //but you can override it
  },
};
// console.log(objTwo.toString());

let objThree = {
  toString(arg1) {
    return arg1;
  },
};
// console.log(objThree.toString("Hey Brather"));

let obj = {};
// console.log(10 - obj); //obj.typeof() -> object,  toString->[object, Object]; NaN
// console.log(obj - obj); //NaN

let obj2 = {
  x: 7,
  valueOf() {
    return 99;
  },
};

// console.log(100 - obj2); //1

let obj3 = {
  x: 10,
  valueOf() {
    return "90";
  },
};
console.log(100 - obj3);

let obj4 = {
  x: 11,
  valueOf() {
    return {};
  },
};

console.log(10 - obj4);
// console.log(obj4 - 10);
console.log(10 + obj4); //string than concatination, number than addition, object than 10[object, Object]

//Unary +Operator converts it's operand to Number type
console.log(+10); //10
console.log(+"10"); //10
console.log(+"hey"); //NaN
