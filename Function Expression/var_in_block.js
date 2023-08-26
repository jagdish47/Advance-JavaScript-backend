function fun() {
  var i = 5;
  while (i < 10) {
    //This while is no effect of the while scope on var
    var x = i;
    i++;
  }
  console.log(x);
}
fun();

let i = 1;
while (i < 5) {
  var y = 10;
  i++;
}
console.log(y);

var x = 10;
var x = 20;
//redeclaration allow with var

let y = 10;
let y = 20;
//redeclaration isn't allow with let
