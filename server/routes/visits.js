import express from "express";

import { getVisits, createVisit, updateVisit, deleteVisit } from "../controllers/visits.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getVisits);
router.post("/", auth, createVisit);
router.patch("/update", auth, updateVisit);
router.patch("/refuse", auth, deleteVisit);

export default router;