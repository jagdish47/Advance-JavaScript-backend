const { createLogger, format, transports, log } = require("winston");
const { combine, timestamp, label, printf } = format;

const customFormat = printf(({ level, message, timestamp, error }) => {
  return `${timestamp}  : ${level} : ${message} : ${error}`;
});

const logger = createLogger({
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), customFormat),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "combine.log" }),
  ],
});

module.exports = logger;
