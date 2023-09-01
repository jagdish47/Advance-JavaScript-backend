function download(url) {
  return new Promise(function exec(res, rej) {
    setTimeout(function p() {
      console.log("Completed downloading data in 5s");
      const content = "ABCDEF";
      res(content);
    }, 5000);
  });
}

//this time your not giving access to third party
// download("www.xyz.com").then(function fullFillHandler(value) {
//   console.log("Content Downloaded is", value);
// });

// download("www.xyz.com").then(function fullFillHandler(value) {
//   console.log("Content Downloaded is", value);
// });

// download("www.xyz.com").then(function fullFillHandler(value) {
//   console.log("Content Downloaded is", value);
// });
//You can handle it Multiple time as well

const x = download("www.xyz.com");

x.then(
  function fullfillHandler(value) {
    console.log("Content Downloaded is1", value);
  },
  function rejectHandler(value) {
    console.log("rejected with", value);
  }
).then(function newFullFillHandler(value) {
  console.log("value from chained then promise", value);
});

//You use then again here also it's called Chained promise

/**
 * (.then) will return a new Promise
 *
 */
