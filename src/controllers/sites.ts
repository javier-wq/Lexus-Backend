import { Request, Response } from "express";
import { handlerHttp } from "../utils/error.handler";
import {
  insertSite,
  readSite,
  readSites,
  putSite,
  dropSite,
} from "../services/sites";

const getSite = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await readSite(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handlerHttp(res, "ERROR_GET_SITE");
  }
};

const getSites = async (req: Request, res: Response) => {
  try {
    const response = await readSites();
    res.send(response);
  } catch (e) {
    handlerHttp(res, "ERROR_GET_SITES");
  }
};

const updateSite = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await putSite(id, body);
    res.send(response);
  } catch (e) {
    handlerHttp(res, "ERROR_UPDATE_SITE");
  }
};

const postSite = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertSite(body);
    res.send(responseItem);
  } catch (e) {
    handlerHttp(res, "ERROR_POST_SITE", e);
  }
};

const deleteSite = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await dropSite(id);
    res.send(response);
  } catch (e) {
    handlerHttp(res, "ERROR_DELETE  _SITE");
  }
};

export { getSite, getSites, updateSite, postSite, deleteSite };
