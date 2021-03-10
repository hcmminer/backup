const express = require("express");

const app = express();
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function (req, res) {
    res.render("index");
  });


app.listen(8000, () => {
  console.log("server listening on port" + 8000);
});
