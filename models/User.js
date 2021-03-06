const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: "Name is required",
    },
    password: {
      type: String,
      required: "Password is required",
    },
    email: {
      type: String,
      required: "Email is required",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
