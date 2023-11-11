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
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handlerHttp(res, "ERROR_GET_SITE");
  }
};

const getSiteOwners = async (req: Request, res: Response) => {
  try {
    const response = await readSiteOwners();
    res.send(response);
  } catch (e) {
    handlerHttp(res, "ERROR_GET_SITES");
  }
};

const updateSiteOwner = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await putSiteOwner(id, body);
    res.send(response);
  } catch (e) {
    handlerHttp(res, "ERROR_UPDATE_SITE");
  }
};

const postSiteOwner = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertSiteOwner(body);
    res.send(responseItem);
  } catch (e) {
    handlerHttp(res, "ERROR_POST_SITE", e);
  }
};

const deleteSiteOwner = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await dropSiteOwner(id);
    res.send(response);
  } catch (e) {
    handlerHttp(res, "ERROR_DELETE  _SITE");
  }
};

export {
  getSiteOwner,
  getSiteOwners,
  updateSiteOwner,
  postSiteOwner,
  deleteSiteOwner,
};
