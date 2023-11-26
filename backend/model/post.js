const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  type: {
    type: String,
  },
});

const PostModel = mongoose.model("Post", postSchema);

module.exports = { PostModel };
