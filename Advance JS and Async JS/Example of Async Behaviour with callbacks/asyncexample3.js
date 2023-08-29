console.log("Hello world");

for (let i = 0; i < 3; i++) {
  setTimeout(function exec() {
    //we are just start the timer in runtime we dont need to care about it
    console.log("Timer done");
  }, 10);
}

for (let i = 0; i < 100000000; i++) {
  //some task
}

console.log("End");

/**
 *
 * Hello world
 * End
 * Timer done
 * Timer done
 * Timer done
 */
