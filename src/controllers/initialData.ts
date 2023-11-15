import { Request, Response } from "express";
import { handlerHttp } from "../utils/error.handler";
import { uploadImage } from "../utils/cloudinary.handler";
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
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handlerHttp(res, "ERROR_GET_SITE");
  }
};

const getInitialsData = async (req: Request, res: Response) => {
  try {
    const response = await readInitialsData();
    res.send(response);
  } catch (e) {
    handlerHttp(res, "ERROR_GET_SITES");
  }
};

const updateInitialData = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await putInitialData(id, body);
    res.send(response);
  } catch (e) {
    handlerHttp(res, "ERROR_UPDATE_SITE");
  }
};

const postInitialData = async (req: Request, res: Response) => {
  try {
    // Extraer datos del cuerpo de la solicitud
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
    res.status(500).send("Internal Server Error");
  }
};

const deleteInitialData = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await dropInitialData(id);
    res.send(response);
  } catch (e) {
    handlerHttp(res, "ERROR_DELETE  _SITE");
  }
};

export {
  getInitialData,
  getInitialsData,
  updateInitialData,
  postInitialData,
  deleteInitialData,
};
