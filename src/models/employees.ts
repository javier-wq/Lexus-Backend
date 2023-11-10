import { Schema, Types, model, Model } from "mongoose";
import { Employees } from "../interfaces/employees.interface";

const EmployeesSchema = new Schema<Employees>(
  {
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const EmployeesModel = model("employees", EmployeesSchema);
export default EmployeesModel;
