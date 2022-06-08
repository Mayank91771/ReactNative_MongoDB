const mongoose = require("mongoose");

const helloWorldSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Hello", helloWorldSchema);
