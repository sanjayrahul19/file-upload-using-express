const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  file: {
    type: String,
    required: true,
  },
});

const File = mongoose.model("files", fileSchema);

module.exports = File;
