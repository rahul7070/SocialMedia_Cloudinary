const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema({
  cloudinaryId: { type: String, required: true },
  url: { type: String, required: true },
  format: { type: String, required: true },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" }, // Corrected reference name
});

const MediaModel = mongoose.model("Media", mediaSchema); // Corrected model creation

module.exports = { MediaModel };
