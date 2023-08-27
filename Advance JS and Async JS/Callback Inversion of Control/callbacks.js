/**
 *
 * CALLBACK
 * A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
 *
 *
 */

function fun(x, fn) {
  /**
   * x - > number
   * fn -> fn
   */
  for (let i = 0; i < x; i++) {
    // console.log(i);
  }
  fn();
}
fun(5, function fn() {
  //   console.log("I an fn(), execute as well");
});

setTimeout(() => {
  console.log("running after sometime");
}, 2000);

//What is the biggest problem with callbacks ?
/**
 * Inversion of Control(Biggest Proble) -> check InversionOfControl.js
 * Callback Hell(second biggest problem) -> check callbackHell.js
 */
