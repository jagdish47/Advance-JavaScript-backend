const express = require("express");
const app = express();

const PORT = 3000;

const mylogger = (req, res, next) => {
  console.log("Logging from middleware 1");
  //return ({message : "Done"}) //In that the next() will never called because we are returning
  next(); //call the next middleware
};

const extLogger = (req, res, next) => {
  console.log("logging from middleware 2");
  next();
};

app.get("/home", mylogger, extLogger, (request, response) => {
  console.log("last middleware");
  response.json({
    message: "OK get",
  });
});

app.listen(PORT, () => {
  console.log(`server is up and listeneing at ${PORT}`);
});
