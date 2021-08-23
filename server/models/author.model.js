const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Author Name is Required"],
      unique: true,
      minLength: [3, "Author Name must be at least 3 characters"],
    },
  },
  { timestamps: true }
);
AuthorSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Author", AuthorSchema);
