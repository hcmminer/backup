require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL);

const userRoute = require("./routes/user.route");
const authRoute = require("./routes/auth.route");
const productRoute = require("./routes/product.route");
const cartRoute = require("./routes/cart.route");
const transferRoute = require("./routes/transfer.route");
const apiProductRoute = require("./api/routes/product.route");

const authMiddleware = require("./middlewares/auth.middleware");
const sessionMiddleware = require("./middlewares/session.middleware");

const port = 3000;

const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index", {
    name: "AAA",
  });
});

app.use("/users", authMiddleware.requireAuth, userRoute);
app.use("/products", productRoute);
app.use("/cart", cartRoute);
app.use("/auth", authRoute);
app.use("/transfer", authMiddleware.requireAuth, transferRoute);
app.use("/api", apiProductRoute);

app.listen(port, () => {
  console.log("server listening on port" + port);
});
