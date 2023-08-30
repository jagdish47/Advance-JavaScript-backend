function getRandomNumber(num) {
  return Math.round(Math.random() * num);
}

function createPromiseWithLoop() {
  return new Promise(function exec(resolve, reject) {
    for (let i = 0; i < 10000000000; i++) {}
    let num = getRandomNumber(10);

    if (num % 2 == 0) {
      resolve(num);
    } else {
      reject(num);
    }
  });
}

const x = createPromiseWithLoop();
console.log(x);
