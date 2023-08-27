function doTask(fn, x) {
  fn(x * x);
  fn(x * x); //calling my callback with square of x
  //suppose you have done some mistake and the whole callback will ruin
}

doTask(function exec(num) {
  //due to callbaks, I am passing control of how exec should be called to doTask
  //this is inversion of control
  console.log("Woah num is : ", num);
}, 9);
