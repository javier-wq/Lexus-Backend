import { Router } from "express";
import { checkJWT } from "../middleware/session";
import {
  deleteInitialData,
  getInitialData,
  getInitialsData,
  postInitialData,
  updateInitialData,
} from "../controllers/initialData";

const router = Router();

router.get("/", checkJWT, getInitialsData);

router.get("/:id", getInitialData);

router.post("/", postInitialData);

router.put("/:id", updateInitialData);

router.delete("/:id", deleteInitialData);

export { router };
