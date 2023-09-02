/**
 *
 * Tasks:(Don't use promises only use callback)
 * 1. Write a function to download data from a url
 * 2. Write a function to save that downloaded data in a file and return the filename
 * 3. Write a function to upload the file written in previous step to a newurl
 *
 */

//-------------my solution----------

function downloader(url, cb) {
  console.log("start downloading the data");

  setTimeout(function timer1() {
    console.log("Downloading done", url);

    const data = "Assume it's downloaded data";
    cb(data);
  }, 5000);
}

function c(fileData) {
  console.log(fileData);
}

// downloader("www.api.com", c);

// -------------------Sanket Solution------------

function download(url, cb) {
  console.log("Starting to donwlaod data from", url);

  setTimeout(function down() {
    console.log("Downloading completed");
    const content = "ABCDEF";
    cb(content);
  }, 4000);
}

function writeFile(data, cb) {
  console.log("Started writing a file with", data);
  setTimeout(function () {
    console.log("Completed writing the data in a file");
    const filename = "file.txt";
    cb(filename);
  }, 5000);
}

download("www.xyz.com", function process(content) {
  console.log("Downloaded data is ", content);
});

function upload(url, file, cb) {
  console.log("Started uploading ", file, "on ", url);

  setTimeout(function up() {
    console.log("upload completed");
    const response = "SUCCESS";
    cb(response);
  }, 2000);
}

download("www.xyz.com", function processDownloading(content) {
  console.log("We are now going to process the downloaded data");

  writeFile(content, function processWrite(filename) {
    console.log("We have downloaded and written the file, now will upload");

    upload("www.upload.com", filename, function processUpload(response) {
      console.log("we have uploaded with", response);
    });
  });
});
