import express from "express";
import {
  createBike,
  deleteBike,
  getBike,
  getBikes,
  updateBike,
  updateBikeAvailability,
  getBikesInAvailableDates
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

//GET IN AVAILABLE DATES
router.get("/available/:store", getBikesInAvailableDates);

export default router;