function blocking_for_loop() {
  for (let i = 0; i < 100000000; i++) {
    //something
  }
}
console.log("Start of the file");

setTimeout(function timer1() {
  console.log("Timer 1 done");
}, 0);

blocking_for_loop();

let x = Promise.resolve("Sanket's promise1");
x.then(function processPromise(value) {
  console.log("Whose promise ? ", value);
  blocking_for_loop();
});

let y = Promise.resolve("Sanket's promise2");
y.then(function processPromise(value) {
  console.log("Whose promise ? ", value);
  setTimeout(function () {
    console.log("ok done");
  }, 0);
});

let z = Promise.resolve("Sanket's promise3");
z.then(function processPromise(value) {
  console.log("Whose promise ? ", value);
});

setTimeout(function timer2() {
  console.log("Timer 2 done");
}, 0);

console.log("End of the file");

/**
 *
 *
 *
 *
 *
 * Start of the file -1
 *
 * [setTimeout -> Runtime]
 * [start for loop and ends till then timer1 came to MacroTaskQueue]
 *
 * [Inside MicroTaskQueue -> processPromise]
 * [Another MicroTaskQueue] -> processPromise
 * [And Again MicroTaskQueue] -> ProcessPromise
 *
 * [setTimeout went to runtime]
 *
 * End of the file -2
 *
 * [setTimeout came to MacroTaskQueue]
 *
 * Whoe promise ? Sanket's promise1 -3
 *
 * Whose promise Sanket's promise2 -4
 *
 * [setTimeout inside promise]
 *
 * Whose Promsie ? Sanket's promise3 -5
 *
 * Timer 1 done -6
 * Timer 2 done -7
 * ok done -8
 *
 *
 *
 *
 */
