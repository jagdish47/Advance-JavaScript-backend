if (false) {
  var z = 100;
}
// console.log(z); //undefined

function fun() {
  var y = 10;
  //var is encloled inside the function
  //now it's not accessible to outside
}

// console.log(y); //y is not defined

function gun() {
  //   console.log(y);
  var y = 10; //undefined
}
gun();

// console.log(one); //one is not defined
function jun() {
  var one = 100;
}
