const express = require("express");
const { authGuard } = require("./middleware/auth.middleware");
const router = require("./routes/auth.routes");
const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("", router);

app.get("/", (req, res) => {
  console.log(req.app.locals.user);
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("signin");
});

app.get("/home", authGuard, (req, res) => {
  // console.log(req.app.locals.user);
  res.render("hello");
});

app.listen(3000, (req, res) => {
  console.log("Aplikasi sudah berjalan");
});
