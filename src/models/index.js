const mongoose = require("mongoose");

const userSchema = require("./user");
const User = mongoose.model("user", userSchema);

module.exports = {
  User
};
