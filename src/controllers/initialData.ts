import { Request, Response } from "express";
import fs from "fs";
import { handlerHttp } from "../utils/error.handler";
import { uploadImage, deleteImage } from "../utils/cloudinary.handler";
import {
  dropInitialData,
  insertInitialData,
  putInitialData,
  readInitialData,
  readInitialsData,
} from "../services/initialData";

const getInitialData = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await readInitialData(id);

    if (!response) {
      return res.status(404).send("NOT_FOUND");
    }

    res.send(response);
  } catch (e) {
    console.error(e);
    handlerHttp(res, "ERROR_GET_INITIAL_DATA");
  }
};

const getInitialsData = async (req: Request, res: Response) => {
  try {
    const response = await readInitialsData();
    res.send(response);
  } catch (e) {
    handlerHttp(res, "ERROR_GET_INITIALS_DATA");
  }
};

const updateInitialData = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await putInitialData(id, body);
    res.send(response);
  } catch (e) {
    handlerHttp(res, "ERROR_UPDATE_INITIAL_DATA");
  }
};

const postInitialData = async (req: Request, res: Response) => {
  try {
    // Extract data from request body
    const {
      siteName,
      visitDate,
      entryTime,
      nocCall,
      employees,
      siteOwner,
      access,
      comment,
    } = req.body;

    const data = req.body;

    if (req.files && req.files.imgIncome) {
      // Check if it's an array of files
      const imgIncomeFiles = Array.isArray(req.files.imgIncome)
        ? req.files.imgIncome
        : [req.files.imgIncome];

      // Process each file
      const imgIncomeResults = await Promise.all(
        imgIncomeFiles.map(async (file) => {
          const result = await uploadImage(file.tempFilePath);

          //Delete local file after uploading to Cloudinary
          fs.unlinkSync(file.tempFilePath);

          return {
            public_id: result.public_id,
            secure_url: result.secure_url,
          };
        })
      );

      // Update the data with the processed files
      data.imgIncome = imgIncomeResults;
    }

    if (req.files && req.files.imgTower) {
      // Check if it's an array of files
      const imgTowerFiles = Array.isArray(req.files.imgTower)
        ? req.files.imgTower
        : [req.files.imgTower];

      // Process each file
      const imgTowerResults = await Promise.all(
        imgTowerFiles.map(async (file) => {
          const result = await uploadImage(file.tempFilePath);

          //Delete local file after uploading to Cloudinary
          fs.unlinkSync(file.tempFilePath);

          return {
            public_id: result.public_id,
            secure_url: result.secure_url,
          };
        })
      );

      // Update the data with the processed files
      data.imgTower = imgTowerResults;
    }

    if (req.files && req.files.imgPanorama1) {
      // Check if it's an array of files
      const imgPanorama1Files = Array.isArray(req.files.imgPanorama1)
        ? req.files.imgPanorama1
        : [req.files.imgPanorama1];

      // Process each file
      const imgPanorama1Results = await Promise.all(
        imgPanorama1Files.map(async (file) => {
          const result = await uploadImage(file.tempFilePath);

          //Delete local file after uploading to Cloudinary
          fs.unlinkSync(file.tempFilePath);

          return {
            public_id: result.public_id,
            secure_url: result.secure_url,
          };
        })
      );

      // Update the data with the processed files
      data.imgPanorama1 = imgPanorama1Results;
    }

    if (req.files && req.files.imgPanorama2) {
      // Check if it's an array of files
      const imgPanorama2Files = Array.isArray(req.files.imgPanorama2)
        ? req.files.imgPanorama2
        : [req.files.imgPanorama2];

      // Process each file
      const imgPanorama2Results = await Promise.all(
        imgPanorama2Files.map(async (file) => {
          const result = await uploadImage(file.tempFilePath);

          //Delete local file after uploading to Cloudinary
          fs.unlinkSync(file.tempFilePath);

          return {
            public_id: result.public_id,
            secure_url: result.secure_url,
          };
        })
      );
      // Update the data with the processed files
      data.imgPanorama2 = imgPanorama2Results;
    }

    const responseItem = await insertInitialData(data);
    res.send(responseItem);
  } catch (error) {
    console.error(error);
    res.status(500).send("INTERNAL_SERVER_ERROR");
  }
};

const deleteInitialData = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;

    // Get complete information on the images associated with the data entry
    const data: any = await readInitialData(id);

    // Verify that data is not null
    if (!data) {
      return res.status(404).send("NOT_FOUND");
    }

    // Delete Cloudinary images
    const deleteCloudinaryImages = async (images: Array<any> | undefined) => {
      if (images) {
        const publicIds = images.map((img) => img?.public_id).filter(Boolean); // Filter null values
        await Promise.all(publicIds.map(deleteImage));
      }
    };

    await deleteCloudinaryImages(data.imgIncome);
    await deleteCloudinaryImages(data.imgTower);
    await deleteCloudinaryImages(data.imgPanorama1);
    await deleteCloudinaryImages(data.imgPanorama2);

    // Repeat the process for other image properties if necessary

    // Finally, delete the data entry
    const response = await dropInitialData(id);
    res.send(response);
  } catch (e) {
    console.error(e);
    handlerHttp(res, "ERROR_DELETE_INITIAL_DATA");
  }
};

export {
  getInitialData,
  getInitialsData,
  updateInitialData,
  postInitialData,
  deleteInitialData,
};
