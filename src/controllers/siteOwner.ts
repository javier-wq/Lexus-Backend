import { Request, Response } from "express";
import { handlerHttp } from "../utils/error.handler";
import {
  dropSiteOwner,
  insertSiteOwner,
  putSiteOwner,
  readSiteOwner,
  readSiteOwners,
} from "../services/siteOwner";

const getSiteOwner = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await readSiteOwner(id);

    if (!response) {
      return res.status(404).send("NOT_FOUND");
    }

    res.send(response);
  } catch (e) {
    console.error(e);
    handlerHttp(res, "ERROR_GET_SITE_OWNER");
  }
};

const getSiteOwners = async (req: Request, res: Response) => {
  try {
    const response = await readSiteOwners();
    res.send(response);
  } catch (e) {
    handlerHttp(res, "ERROR_GET_SITES_OWNER");
  }
};

const updateSiteOwner = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await putSiteOwner(id, body);
    res.send(response);
  } catch (e) {
    handlerHttp(res, "ERROR_UPDATE_SITE_OWNER");
  }
};

const postSiteOwner = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertSiteOwner(body);
    res.send(responseItem);
  } catch (e) {
    handlerHttp(res, "ERROR_POST_SITE_OWNER", e);
  }
};

const deleteSiteOwner = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await dropSiteOwner(id);
    res.send(response);
  } catch (e) {
    handlerHttp(res, "ERROR_DELETE_SITE_OWNER");
  }
};

export {
  getSiteOwner,
  getSiteOwners,
  updateSiteOwner,
  postSiteOwner,
  deleteSiteOwner,
};
