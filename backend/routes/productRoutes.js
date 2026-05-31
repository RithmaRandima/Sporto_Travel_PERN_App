import express from "express";
import {
  createTravel,
  deleteTravel,
  getAllTravels,
  getTravel,
  updateTravel,
} from "../controllers/productControllers.js";

const router = express();

router.get("/", getAllTravels);
router.get("/:id", getTravel);
router.post("/create", createTravel);
router.put("/travels/:id", updateTravel);
router.delete("/travels/:id", deleteTravel);

export default router;
