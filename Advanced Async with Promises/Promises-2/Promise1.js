function getRandomNumber(mul) {
  return Math.round(Math.random() * mul);
}

function creatingPromiseSettimeout() {
  return new Promise(function executor(resolve, reject) {
    console.log("Entering the executor callback in the promise constructor");

    setTimeout(function () {
      let num = getRandomNumber(10);

      if (num % 2 == 0) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 10000);
    console.log("Exiting the executor callback in the promise constuctor..");
  });
}

console.log("starting...");

const p = creatingPromiseSettimeout();
console.log("We are now waiting for the promise to complete");
console.log("Currently my promise object is like...", p);

p.then(
  function fullfillHandler(value) {
    console.log("Inside fullfill handler with value", value);
    console.log("Promise after fullfillment", p);
  },
  function rejectionHandler(value) {
    console.log("Inside rejection with value", value);
    console.log("Promsie after Rejection ", p);
  }
);
