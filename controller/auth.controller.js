const users = [{ username: "SIJA", password: "sijasmkn69jkt" }];

exports.signin = (req, res) => {
  try {
    // Check username is valid
    const user = users.find((user) => user.username == req.body.username);
    if (!user) {
      res.status(404).send("Username tidak ditemukan");
    }

    // Check password is valid
    if (user.password != req.body.password) {
      res.status(400).send("Password Invalid");
    }

    // When password and username valid
    res.send({ user: user });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
