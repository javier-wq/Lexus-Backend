import { Router } from "express";
import {
  deleteSite,
  getSite,
  getSites,
  postSite,
  updateSite,
} from "../controllers/sites";

const router = Router();

router.get("/", getSites);

router.get("/:id", getSite);

router.post("/", postSite);

router.put("/:id", updateSite);

router.delete("/:id", deleteSite);

export { router };
