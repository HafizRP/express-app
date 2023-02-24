exports.authGuard = (req, res, next) => {
  if (!req.app.locals.user) {
    res.status(401).send("Lu tu kudu login");
  }

  next();
};
