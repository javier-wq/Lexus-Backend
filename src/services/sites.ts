import { Sites } from "../interfaces/sites.interface";
import SiteModel from "../models/sites";

const insertSite = async (site: Sites) => {
  const responseInsert = await SiteModel.create(site);
  return responseInsert;
};

const readSites = async () => {
  const responseSites = await SiteModel.find({});
  return responseSites;
};

const readSite = async (id: string) => {
  const responseSite = await SiteModel.findOne({ _id: id });
  return responseSite;
};

const putSite = async (id: string, data: Sites) => {
  const responseSite = await SiteModel.findByIdAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseSite;
};

const dropSite = async (id: string) => {
  const responseSite = await SiteModel.deleteOne({ _id: id });
  return responseSite;
};

export { insertSite, readSites, readSite, putSite, dropSite };
