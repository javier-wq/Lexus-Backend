import mongoose, { Schema, Types, model, Model } from "mongoose";
import { InitialData } from "../interfaces/initialData.interface";

const InitialDataSchema = new Schema<InitialData>(
  {
    siteName: {
      type: Schema.Types.ObjectId,
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
      type: [
        {
          public_id: String,
          secure_url: String,
        },
      ],
      required: true,
      default: [],
    },
    imgTower: {
      type: [
        {
          public_id: String,
          secure_url: String,
        },
      ],
      required: true,
      default: [],
    },
    imgPanorama1: {
      type: [
        {
          public_id: String,
          secure_url: String,
        },
      ],
      required: true,
      default: [],
    },
    imgPanorama2: {
      type: [
        {
          public_id: String,
          secure_url: String,
        },
      ],
      required: true,
      default: [],
    },
    siteOwner: {
      type: Schema.Types.ObjectId,
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

const InitialDataModel = model("initialData", InitialDataSchema);
export default InitialDataModel;
