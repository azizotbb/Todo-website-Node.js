const express = require("express");
const db = require("./db");
const Task = require("./modules/Task");
const path = require("path");
var methodOverride = require("method-override");
const { title } = require("process");
const router = require("./routes/task");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method", { method: ["GET", "GET"] }));

app.set("view engine", "ejs");
app.use("/", router);

app.listen(3000, () => {
  console.log("server is working");
});
