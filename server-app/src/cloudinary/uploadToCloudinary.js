const { cloudinary } = require("./clodinary");

async function uploadToCloudinary(image, folder) {
  try {
    const uploadedRes = await cloudinary.uploader.upload(image, {
      upload_preset: folder,
      allowed_formats: ["png", "jpg", "jpeg", "svg", "ico", "jfif", "webp"],
    });
    if (uploadedRes) {
      return uploadedRes;
    }
  } catch (error) {
    return error;
  }
}
module.exports = { uploadToCloudinary };
