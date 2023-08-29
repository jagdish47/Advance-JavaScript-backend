console.log("Hello World");

setTimeout(function exec() {
  console.log("Timer done");

  setTimeout(function exec() {
    console.log("woah another one");
  }, 20);
}, 0);

for (let i = 0; i < 1000; i++) {
  //some task
}

console.log("End");

/**
 *
 * Hello World
 * End
 * Timer done
 * woah another one
 *
 */
