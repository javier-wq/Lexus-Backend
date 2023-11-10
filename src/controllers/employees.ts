import { Request, Response } from "express";
import { handlerHttp } from "../utils/error.handler";
import {
  dropEmployee,
  insertEmployee,
  putEmployee,
  readEmployee,
  readEmployees,
} from "../services/employees";

const getEmployee = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await readEmployee(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handlerHttp(res, "ERROR_GET_SITE");
  }
};

const getEmployees = async (req: Request, res: Response) => {
  try {
    const response = await readEmployees();
    res.send(response);
  } catch (e) {
    handlerHttp(res, "ERROR_GET_SITES");
  }
};

const updateEmployee = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await putEmployee(id, body);
    res.send(response);
  } catch (e) {
    handlerHttp(res, "ERROR_UPDATE_SITE");
  }
};

const postEmployee = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertEmployee(body);
    res.send(responseItem);
  } catch (e) {
    handlerHttp(res, "ERROR_POST_SITE", e);
  }
};

const deleteEmployee = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await dropEmployee(id);
    res.send(response);
  } catch (e) {
    handlerHttp(res, "ERROR_DELETE  _SITE");
  }
};

export {
  getEmployee,
  getEmployees,
  updateEmployee,
  postEmployee,
  deleteEmployee,
};
