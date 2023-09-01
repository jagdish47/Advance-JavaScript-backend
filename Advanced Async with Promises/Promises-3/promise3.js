console.log("Start of the file");
setTimeout(function timer1() {
  console.log("Timer 1 done");
}, 0);

for (let i = 0; i < 1000000000; i++) {
  //some task
}

let x = Promise.resolve("Sanket's promise");

x.then(function processPromise(value) {
  console.log("Whose promise ? ", value);
});

setTimeout(function timer2() {
  console.log("Timer 2 done");
}, 0);
console.log("End of the file");

/**
 * {Remember one thing you can not execute any queue or TaskQueue even the stack is empty untill the golbol code is executed}
 *
 * start of the file -> 1
 *
 * [timer1 -> runtime] for 0 second 
 * [runs for loop take time]
 * [processPromise went into microQueue]

 * End of the file -> 2
 *
 * {Once the all global code is executed}
 *
 * {MicroTaskquee will run earlier than Queue}
 *Whose Promise Sanket's Promise -> 3
 *
 *
 * Timer 1 Done -> 4
 * Timer 2 Done -> 5
 * 
 */
