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
download("www.xyz.com").then(function fullFillHandler(value) {
  console.log("Content Downloaded is", value);
});
