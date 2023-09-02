function download(url) {
  return new Promise((resolve) => {
    console.log("Starting to download data from", url);

    setTimeout(function down() {
      console.log("Downloading completed");
      const content = "ABCDEF";
      resolve(content); //went to then success
    }, 4000);
  });
}

function writeFile(data) {
  return new Promise((resolve, reject) => {
    console.log("Started writing a file with", data);
    setTimeout(function () {
      console.log("Completed writing the data in a file");
      const filename = "file.txt";
      resolve(filename); //went to then success
    }, 5000);
  });
}

function upload(url, file) {
  return new Promise((resolve) => {
    console.log("Started uploading", file, "on", url);

    setTimeout(function up() {
      console.log("Upload completed");
      const response = "SUCCESS";
      resolve(response); //went to then success
    }, 2000);
  });
}

download("www.xyz.com")
  .then(function (content) {
    console.log("Downloaded data is", content);
    console.log("We are now going to process the downloaded data");
    return writeFile(content); //return a Promise
  })
  .then(function (filename) {
    console.log("We have downloaded and written the file, now will upload");
    return upload("www.upload.com", filename); //return another Promise
  })
  .then(function (response) {
    console.log("We have uploaded with", response);
  })
  .catch(function (error) {
    console.error("Error:", error);
  });
