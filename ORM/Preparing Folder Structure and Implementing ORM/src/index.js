const epxress = require("express");

const { PORT } = require("./config");
const apiRoutes = require("./routes");

const app = epxress();

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Listening on Port:${PORT}`);
});
