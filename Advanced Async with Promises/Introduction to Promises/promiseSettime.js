function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function createPromiseWithTimeout() {
  return new Promise(function executer(resolve, reject) {
    setTimeout(function () {
      let num = getRandomNumber(10);

      if (num % 2 == 0) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 5000);
  });
}

let y = createPromiseWithTimeout();
console.log(y);
