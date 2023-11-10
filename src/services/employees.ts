import { Employees } from "../interfaces/employees.interface";
import EmployeesModel from "../models/employees";

const insertEmployee = async (site: Employees) => {
  const responseInsert = await EmployeesModel.create(site);
  return responseInsert;
};

const readEmployees = async () => {
  const responseSites = await EmployeesModel.find({});
  return responseSites;
};

const readEmployee = async (id: string) => {
  const responseSite = await EmployeesModel.findOne({ _id: id });
  return responseSite;
};

const putEmployee = async (id: string, data: Employees) => {
  const responseSite = await EmployeesModel.findByIdAndUpdate(
    { _id: id },
    data,
    {
      new: true,
    }
  );
  return responseSite;
};

const dropEmployee = async (id: string) => {
  const responseSite = await EmployeesModel.deleteOne({ _id: id });
  return responseSite;
};

export {
  insertEmployee,
  readEmployees,
  readEmployee,
  putEmployee,
  dropEmployee,
};
