import express from "express";
import {
  createBike,
  deleteBike,
  getBike,
  getBikes,
  updateBike,
  updateBikeAvailability,
} from "../controllers/bike.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:storeid", verifyAdmin, createBike);

//UPDATE
router.put("/availability/:id", updateBikeAvailability);
router.put("/:id", verifyAdmin, updateBike);
//DELETE
router.delete("/:id/:storeid", verifyAdmin, deleteBike);
//GET

router.get("/:id", getBike);
//GET ALL

router.get("/", getBikes);

export default router;