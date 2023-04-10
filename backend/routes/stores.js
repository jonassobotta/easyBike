import express from "express";
import {
  createStore,
  deleteStore,
  getStore,
  getStoreBikes,
  getStores,
  updateStore,
} from "../controllers/store.js";
import Store from "../models/Store.js";
import {verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createStore);

//UPDATE
router.put("/:id", verifyAdmin, updateStore);

//DELETE
router.delete("/:id", verifyAdmin, deleteStore);

//GET
router.get("/find/:id", getStore);

//GET ALL
router.get("/", getStores);
router.get("/room/:id", getStoreBikes);

export default router;