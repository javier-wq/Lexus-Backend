import { InitialData } from "../interfaces/initialData.interface";
import InitialDataModel from "../models/initialData";

const insertInitialData = async (site: InitialData) => {
  const responseInsert = await InitialDataModel.create(site);
  return responseInsert;
};

const readInitialsData = async () => {
  const responseSites = await InitialDataModel.find({}).lean();
  return responseSites;
};

const readInitialData = async (id: string) => {
  const responseSite = await InitialDataModel.findOne({ _id: id }).lean();
  return responseSite;
};

const putInitialData = async (id: string, data: InitialData) => {
  const responseSite = await InitialDataModel.findByIdAndUpdate(
    { _id: id },
    data,
    {
      new: true,
    }
  ).lean();
  return responseSite;
};

const dropInitialData = async (id: string) => {
  const responseSite = await InitialDataModel.deleteOne({ _id: id });
  return responseSite;
};

export {
  insertInitialData,
  readInitialsData,
  readInitialData,
  putInitialData,
  dropInitialData,
};
