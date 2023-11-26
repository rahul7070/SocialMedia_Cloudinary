const mediaRouter = require("express").Router();
const upload = require("../middleware/multer");
const cloudinary = require("../config/cloudinary");
const { MediaModel } = require("../model/media");
const { PostModel } = require("../model/post");

mediaRouter.get("/", async (req, res) => {
  try {
    let data = await MediaModel.find();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

mediaRouter.post("/upload", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  // Upload the file to Cloudinary
  cloudinary.uploader
    .upload_stream({ resource_type: "auto" }, async (error, result) => {
      if (error) {
        console.error(error);
        return res
          .status(500)
          .json({ error: "Error uploading file to Cloudinary" });
      }

      // Correct field names when creating a new PostModel
      console.log("req.body.title:", req.body);

      const blog = new PostModel({
        type: result.format,
      });
      await blog.save();

      const payload = new MediaModel({
        cloudinaryId: result.public_id,
        url: result.secure_url,
        format: result.format,
        post: blog._id, // Use post instead of postid
      });
      await payload.save();

      res.json(result);
    })
    .end(req.file.buffer);
});

module.exports = mediaRouter;
