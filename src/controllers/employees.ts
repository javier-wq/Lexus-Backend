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

    if (!response) {
      return res.status(404).send("NOT_FOUND");
    }

    res.send(response);
  } catch (e) {
    console.error(e);
    handlerHttp(res, "ERROR_GET_EMPLOYEE");
  }
};

const getEmployees = async (req: Request, res: Response) => {
  try {
    const response = await readEmployees();
    res.send(response);
  } catch (e) {
    handlerHttp(res, "ERROR_GET_EMPLOYEES");
  }
};

const updateEmployee = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await putEmployee(id, body);
    res.send(response);
  } catch (e) {
    handlerHttp(res, "ERROR_UPDATE_EMPLOYEES");
  }
};

const postEmployee = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertEmployee(body);
    res.send(responseItem);
  } catch (e) {
    handlerHttp(res, "ERROR_POST_EMPLOYEES", e);
  }
};

const deleteEmployee = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await dropEmployee(id);
    res.send(response);
  } catch (e) {
    handlerHttp(res, "ERROR_DELETE_EMPLOYEES");
  }
};

export {
  getEmployee,
  getEmployees,
  updateEmployee,
  postEmployee,
  deleteEmployee,
};
