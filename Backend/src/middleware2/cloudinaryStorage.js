const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary=require("../config/cloudinaryConfig");

// file: middleware/upload.js

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "room-photos",
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

const upload = multer({ storage });

module.exports = upload;
