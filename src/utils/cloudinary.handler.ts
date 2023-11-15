import { v2 as cloudinary } from "cloudinary";
import { cloudinaryConfig } from "../config/cloudinary";

cloudinaryConfig();

const uploadImage = async (filePath: string) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "replit",
  });
};

export { uploadImage };
