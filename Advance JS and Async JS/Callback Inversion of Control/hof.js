// Higher Order Function -> function take another function as a argument called HOF

// function f(x, fn) {
//   console.log(x);
//   console.log(fn);
//   fn();
// }

// function fn() {
//   console.log("Function Fn");
// }
// f(10, fn);

// f(20, function () {
//   console.log("Funstion passing as parameter");
// });

let arr = [1, 2, 10, 12, 34, 454, 23, 34, 34];
arr.sort(); //now it will be sort in lexicographical order (means dictionary order)

arr.sort((a, b) => {
  return a - b; //Increasing
});
// console.log(arr);

arr.sort(function (a, b) {
  return b - a; //Decreasing
});
// console.log(arr);

arr.sort((a, b) => {
  return b + a; //both sort in decresing order sort
  return a + b; //both sort in decresing order sort
});
// console.log(arr);
