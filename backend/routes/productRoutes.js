import express from "express";
import {
  createTravel,
  deleteTravel,
  getAllTravels,
  getTravel,
  updateTravel,
} from "../controllers/productControllers.js";

const router = express.Router();

router.get("/", getAllTravels);
router.get("/:id", getTravel);
router.post("/create", createTravel);
router.put("/:id", updateTravel);
router.delete("/:id", deleteTravel);

export default router;
