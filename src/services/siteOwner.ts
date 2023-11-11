import { SiteOwner } from "../interfaces/siteOwner.interface";
import SiteOwnerModel from "../models/siteOwner";

const insertSiteOwner = async (site: SiteOwner) => {
  const responseInsert = await SiteOwnerModel.create(site);
  return responseInsert;
};

const readSiteOwners = async () => {
  const responseSites = await SiteOwnerModel.find({});
  return responseSites;
};

const readSiteOwner = async (id: string) => {
  const responseSite = await SiteOwnerModel.findOne({ _id: id });
  return responseSite;
};

const putSiteOwner = async (id: string, data: SiteOwner) => {
  const responseSite = await SiteOwnerModel.findByIdAndUpdate(
    { _id: id },
    data,
    {
      new: true,
    }
  );
  return responseSite;
};

const dropSiteOwner = async (id: string) => {
  const responseSite = await SiteOwnerModel.deleteOne({ _id: id });
  return responseSite;
};

export {
  insertSiteOwner,
  readSiteOwners,
  readSiteOwner,
  putSiteOwner,
  dropSiteOwner,
};
