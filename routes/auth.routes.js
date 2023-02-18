const { Router } = require("express");
const { signin } = require("../controller/auth.controller");
const router = Router();

router.post("/login", signin);

module.exports = router;
