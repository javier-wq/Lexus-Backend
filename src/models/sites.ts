import { Schema, Types, model, Model } from "mongoose";
import { Sites } from "../interfaces/sites.interface";

const SiteSchema = new Schema<Sites>(
  {
    siteN: {
      type: String,
      required: true,
    },
    siteID: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const SiteModel = model("sites", SiteSchema);
export default SiteModel;
