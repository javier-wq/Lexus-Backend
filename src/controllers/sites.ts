import { Request, Response } from "express";
import { handlerHttp } from "../utils/error.handler";

const getSite = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handlerHttp(res, 'ERROR_GET_SITE')
    }
};

const getSites = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handlerHttp(res, 'ERROR_GET_SITES')
    }
};

const updateSite = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handlerHttp(res, 'ERROR_UPDATE_SITE')
    }
};

const postSite = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handlerHttp(res, 'ERROR_POST_SITE')
    }
};

const deleteSite = (req: Request, res: Response) => {
    try {
        
    } catch (e) {
        handlerHttp(res, 'ERROR_DELETE_SITE')
    }
};

export { getSite, getSites, updateSite, postSite, deleteSite };
