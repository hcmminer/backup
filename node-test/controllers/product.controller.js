const Product = require('../models/product.model');

module.exports.index = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perpage = 4;
  // // co the dung drop va take cua lodash de lam
  const start = (page - 1) * perpage;
  const end = page * perpage;
  // res.render("products/index", {
  //   products: db.get("products").value().slice(start, end),
  // });

  // Product.find().then((products) => {
  //   res.render("products/index",{
  //     products: products
  //   });
  // })

  const products = await Product.find();
  res.render('products/index',{
    products: products.slice(start, end)
  })
  
};
