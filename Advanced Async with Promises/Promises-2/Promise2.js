function createPromise() {
  return new Promise(function exec(resolve, reject) {
    console.log("Resolving the Promise");
    resolve("Done");
  });
}

setTimeout(function process() {
  console.log("Timer completed");
}, 3000);

let p = createPromise();

p.then(
  function fullfillHandler1(value) {
    console.log("we fullfilled-1 with a value : ", value);
  },
  function rejectHandle1() {}
);
p.then(
  function fullfillHandler2(value) {
    console.log("we fullfilled-2 with a value : ", value);
  },
  function rejectHandle2() {}
);
p.then(
  function fullfillHandler3(value) {
    console.log("we fullfilled-3 with a value : ", value);
  },
  function rejectHandle3() {}
);

for (let i = 0; i < 1000000000; i++) {
  //some task
}
console.log("ending");
