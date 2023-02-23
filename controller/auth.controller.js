// Dummy DB
const users = [{ username: "SIJA", password: "sijasmkn69jkt" }];

// Fungsi Login/Sign In
exports.signin = (req, res) => {
  try {
    // Check apakah user ada/tidak
    const user = users.find((user) => user.username == req.body.username);
    if (!user) {
      res.status(404).send("Username tidak ditemukan");
    }

    // Check apabila user tersedia, apakah password valid/tidak
    if (user.password != req.body.password) {
      res.status(400).send("Password Invalid");
    }

    // mengirimkan user ketika valid
    res.send({ user });
  } catch (error) {
    res.status(500).json(error);
  }
};
