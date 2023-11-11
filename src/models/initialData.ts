import mongoose, { Schema, Types, model, Model } from "mongoose";
import { InitialData } from "../interfaces/initialData.interface";

const InitialDataSchema = new Schema<InitialData>(
  {
    siteName: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    visitDate: {
      type: Date,
      required: true,
    },
    entryTime: {
      type: String,
      required: true,
    },
    nocCall: {
      type: Boolean,
      required: true,
    },
    employees: {
      type: [String],
      default: [],
      required: true,
    },
    imgIncome: {
      type: String,
      required: true,
    },
    imgTower: {
      type: String,
      required: true,
    },
    imgPanorama1: {
      type: String,
      required: true,
    },
    imgPanorama2: {
      type: String,
      required: true,
    },
    siteOwner: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    access: {
      type: Boolean,
      required: true,
    },
    comment: {
      type: String,
      default: "There is no comment",
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const InitialDataModel = model("siteOwner", InitialDataSchema);
export default InitialDataModel;
