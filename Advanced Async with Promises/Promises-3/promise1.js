function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("Started downloading data", url);

    setTimeout(function processDownloading() {
      let data = "Dummy data";
      console.log("Download Complete");
      resolve(data);
    }, 5000);
  });
}

console.log("start");

let promiseObje = fetchData("www.google.com");

promiseObje.then(function A(value) {
  console.log("Value is : ", value);
});

console.log("End");

/**
 *
 * start
 * <Pending>
 * Started downloding data
 * End
 * Download complete
 * value is Dummy data
 *
 */
