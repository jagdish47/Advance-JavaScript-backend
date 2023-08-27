let x = -0;
console.log(x === 0); //true

console.log(Object.is(x, -0)); //true
console.log(Object.is(x, 0)); //false

console.log(Math.sign(-3)); //-1
console.log(Math.sign(2)); //1

console.log(Math.sign(-0)); //-0
console.log(Math.sign(0)); //0

/*
    Can we write a custom function that can give us sign of a number properly ?
*/

function checkSign(num) {
  if (num < 0) {
    return "-";
  } else if (num > 0) {
    return "+";
  } else {
    return "neither";
  }
}

console.log(checkSign(-10));
console.log(checkSign(10));
console.log(checkSign(0));
