const usersJsonFile = require("./users.json");

module.exports = function (req, res) {
  res.json(usersJsonFile);
};
