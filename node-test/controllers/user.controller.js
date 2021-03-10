const User = require("../models/user.model");
const fs = require("fs");
const path = require("path");

module.exports.index = async (req, res) => {
  const users = await User.find();
  res.render("users/index", {
    users: users,
  });
};

module.exports.search = async (req, res) => {
  var q = req.query.q.toLowerCase();
  const users = await User.find();
  var matchedUsers = users.filter(
    (user) => user.name.toLocaleLowerCase().indexOf(q) !== -1
  );

  res.render("users/index", {
    users: matchedUsers,
  });
};

module.exports.view = async (req, res) => {
  const id = req.params.id;
  var user = await User.findById(id);
  res.render("users/view", {
    user: user,
  });
};

module.exports.create = (req, res) => {
  res.render("users/create");
};

module.exports.postCreate = async (req, res, next) => {
  const obj = {
    name: req.body.name,
    phone: req.body.phone,
    avatar: {
      data: fs.readFileSync(
        path.join(process.cwd() + "/public/uploads/" + req.file.filename)
      ),
      contentType: "image/png",
    },
  };
  User.create(obj, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      // item.save();
      res.redirect("/users");
    }
  });
};
