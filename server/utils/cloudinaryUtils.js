const cloudinary = require("cloudinary").v2;
const createError = require("http-errors");

// upload image to cloudinary
const uploadImageToCloudinary = async (fileBuffer) => {
  return new Promise((resolve, reject) => {
    // (1) create the stream (cloudinary is waiting for the data)
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "Wundt/admin",
        resource_type: "image",
      },
      (error, result) => {
        // (3) tatakbo tong callback pag natapos na iprocess ang pag upload sa cloudinary
        if (error) {
          console.error("Cloudinary upload error:", error);
          reject(createError(500, "Image upload failed. Please try again."));
        } else {
          resolve(result.secure_url);
        }
      }
    );

    // (2) send the image data to the cloudinary
    stream.end(fileBuffer);
  });
};

module.exports = { uploadImageToCloudinary };
