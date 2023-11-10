import { Router } from "express";
import { checkJWT } from "../middleware/session";
import {
  deleteEmployee,
  getEmployee,
  getEmployees,
  postEmployee,
  updateEmployee,
} from "../controllers/employees";

const router = Router();

router.get("/", checkJWT, getEmployees);

router.get("/:id", getEmployee);

router.post("/", postEmployee);

router.put("/:id", updateEmployee);

router.delete("/:id", deleteEmployee);

export { router };
