function download(url) {
  return new Promise(function exec(resolve, reject) {
    console.log("Starting to download data from, ", url);

    setTimeout(function down() {
      console.log("Downloading complete");
      const content = "ABCDEF";
      resolve(content);
    }, 6000);
  });
}

function writeFile(data) {
  return new Promise(function exec(resolve, reject) {
    console.log("Starging writing a file with", data);

    setTimeout(function write() {
      console.log("completed writing data in a file");
      const filename = "file.txt";
      resolve(filename);
    }, 5000);
  });
}

function uploadData(file, url) {
  return new Promise(function exec(resolve, reject) {
    console.log("Stargint uploading", file, "on", url);

    setTimeout(function up() {
      console.log("upload completed");
      const response = "SUCCESS";
      resolve(response);
    }, 2000);
  });
}

function doAfterReceiving(value) {
  let future = iter.next(value);
  console.log("future is ", future);

  if (future.done) {
    return;
  }
  future.value.then(doAfterReceiving);

  iter.next(value);
}

function* steps() {
  const downloadedData = yield download("www.xyz.com");
  console.log("data downloaded is", downloadedData);

  const fileWritten = yield writeFile(downloadedData);
  console.log("file written is", fileWritten);

  const uploadResponse = yield uploadData(fileWritten, "www.drive.google.com");
  console.log("upload response is", uploadResponse);

  return uploadResponse;
}

const iter = steps();
const future = iter.next();
future.value.then(doAfterReceiving);
