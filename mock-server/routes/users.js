var express = require("express");
var router = express.Router();
const users_controller = require("../controller/users/index");

router.get("/", users_controller);

module.exports = router;
