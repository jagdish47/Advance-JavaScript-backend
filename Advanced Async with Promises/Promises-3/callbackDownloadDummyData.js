function download(url, cb) {
  console.log("Started downloading from url", url);

  setTimeout(function exec() {
    console.log("Completed downloading after 5s");
    const content = "ABCDEF";
    cb(content);
  }, 5000);
}

//Here we have given function control to other

download("www.xyz", function processDownload(data) {
  console.log("downloaded data is : ", data);
});
