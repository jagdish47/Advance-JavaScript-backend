let x = setInterval(function () {
  console.log("another one");
}, 1000);

setTimeout(() => {
  clearInterval(x);
}, 2000);
// console.log(x);

//it will cootinuously run callback function in each second.
//each setInterval create a unique id -> we use this id to stop the interval
//to stop the setInterval we have clearInterval -> using clearInterval we can stop the setInterval function

//In browser setInterval give you direct id -> but It might be different browser to browser
//In Node Enviroment setInterval gives you a Object.

let count = 0;
let y = setInterval(function exec() {
  count++;
  console.log(count);

  if (count > 15) {
    clearInterval(y);
  }
}, 1500);
