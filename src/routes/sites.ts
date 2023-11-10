import { Router } from "express";
import {
  deleteSite,
  getSite,
  getSites,
  postSite,
  updateSite,
} from "../controllers/sites";
import { checkJWT } from "../middleware/session";

const router = Router();

router.get("/", checkJWT, getSites);

router.get("/:id", getSite);

router.post("/", postSite);

router.put("/:id", updateSite);

router.delete("/:id", deleteSite);

export { router };
