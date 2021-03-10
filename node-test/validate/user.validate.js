module.exports.postCreate = (req, res, next) => {
  let errors = [];
  if (!req.body.name) {
    errors.push("Name is required.");
  }
  if (!req.body.phone) {
    errors.push("Phone is required.");
  }
  if (errors.length) {
    res.render("users/create", {
      errors: errors,
      values: req.body,
    });
    return;
  }
  res.locals.success = true; // luu tru bien trong 1 vong doi cua req truyen den mid tiep theo
  next();
};
