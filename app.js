const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
const publicPath = path.resolve(__dirname, "./public");
const mainRouter = require("./routers/main");

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log("servidor corriendo en http://localhost:3000");
});

app.use("/", mainRouter);
