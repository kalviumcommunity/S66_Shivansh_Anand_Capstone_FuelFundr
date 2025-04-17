import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import { configDotenv } from "dotenv";
configDotenv();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Multer configuration to handle file uploads in memory (no local storage)
const storage = multer.memoryStorage();

// Multer middleware for handling image uploads
const upload = multer({ storage: storage }).single("image"); // Matches the field name in the form

// Cloudinary upload function
const uploadToCloudinary = (req, res, next) => {
  if (!req.file) return next(); // Skip if no file is uploaded

  cloudinary.uploader
    .upload_stream({ folder: "campaigns_images" }, (error, result) => {
      if (error) {
        console.error("Error uploading to Cloudinary", error);
        return res
          .status(500)
          .json({ message: "Error uploading image to Cloudinary" });
      }
      req.body.image = result.secure_url; // Attach Cloudinary image URL to request body
      next(); // Proceed to next middleware
    })
    .end(req.file.buffer); // Upload file buffer directly to Cloudinary
};

export { upload, uploadToCloudinary };
