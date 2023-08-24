// {
//   var x = 10;
//   //var doesn't follow block scope
//   //this block is no meaning to x
//   //technically var is follow global scope here
// }
// console.log(x);

// if (true) {
//   var y = 20;
// }
// console.log(y);

{
  let x = 10;
}
console.log(x); //x is not defined

// let
// when you declare things with let create a block scope
// let is only availbe position after getting initialize
// only accessible below it scope only

//var
// when you declare things with var craete a function scope
// var is accessible anywhere inside function scope
// accessible throughout the function scope
