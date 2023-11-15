import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";

const cloudinaryConfig = () => {
  const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

  if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
    console.error("Missing required Cloudinary environment variables.");
    return;
  }

  cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET,
    secure: true,
  });
};

export { cloudinaryConfig };
