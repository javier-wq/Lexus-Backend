import { Schema, Types, model, Model } from "mongoose";
import { SiteOwner } from "../interfaces/siteOwner.interface";

const SiteOwnerSchema = new Schema<SiteOwner>(
  {
    siteOwner: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const SiteOwnerModel = model("siteOwner", SiteOwnerSchema);
export default SiteOwnerModel;
