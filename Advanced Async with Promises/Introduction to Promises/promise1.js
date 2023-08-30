function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function createPromiseWithTimeout() {
  return new Promise(function executer(resolve, reject) {
    setTimeout(function () {
      let num = getRandomNumber(10);

      if (num % 2 == 0) {
        console.log("start Resolving");
        resolve(num);
        console.log("stop Resolving");
      } else {
        console.log("start rejecting");
        reject(num);
        consolg.log("start rejecting");
      }
    }, 5000);
  });
}

let y = createPromiseWithTimeout();
console.log(y);
