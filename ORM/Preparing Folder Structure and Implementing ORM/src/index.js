const epxress = require("express");

const { ServerConfig, Logger } = require("./config");
const apiRoutes = require("./routes");

const app = epxress();

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Listening on Port:${ServerConfig.PORT}`);
  Logger.info("Successfull started the server", {});
});
