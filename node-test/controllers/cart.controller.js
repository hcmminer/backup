var db = require("../db");

module.exports.addToCart = (req, res, next) => {
  const productId = req.params.productId; // lay gia tri cua bien truyen vao duong dan '/add/:productId'
  const sessionId = req.signedCookies.sessionId;

  if (!sessionId) {
    res.redirect("/products");
    return;
  }

  const count = db.get('sessions').find({id : sessionId}).get('cart.' + productId,0).value();

  db.get("sessions")
    .find({ id: sessionId })
    .set("cart." + productId, count + 1)
    .write();

  res.redirect("/products");
};
