import { Router } from "express";
import { checkJWT } from "../middleware/session";
import {
  deleteSiteOwner,
  getSiteOwner,
  getSiteOwners,
  postSiteOwner,
  updateSiteOwner,
} from "../controllers/siteOwner";

const router = Router();

router.get("/", checkJWT, getSiteOwners);

router.get("/:id", getSiteOwner);

router.post("/", postSiteOwner);

router.put("/:id", updateSiteOwner);

router.delete("/:id", deleteSiteOwner);

export { router };
