const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// Automatically reads CLOUDINARY_URL from .env
cloudinary.config({
  secure: true,
});

module.exports = cloudinary;
