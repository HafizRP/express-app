const express = require("express");
const router = require("./routes/auth.routes");
const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("", router);

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/login', (req, res) => {
  res.render('signin')
})


app.listen(3000, (req, res) => {
  console.log("Aplikasi sudah berjalan");
});
