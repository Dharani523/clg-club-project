const express = require("express");
const multer = require("multer");
const cloudinary = require("../config/cloudinary");

const router = express.Router();

// Use memory storage (no temp file needed)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Upload Route
router.post("/", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const base64File = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;

    const result = await cloudinary.uploader.upload(base64File, {
      folder: "clubhub_gallery",
    });

    return res.json({
      url: result.secure_url,
      public_id: result.public_id,
    });

  } catch (err) {
    console.error("Cloudinary Upload Error:", err);
    return res.status(500).json({ message: "Upload failed", error: err.message });
  }
});

module.exports = router;
