import express from "express";
import {
  createTrip,
  deleteTrip,
  getAllTrips,
  getTrip,
  updateTrip,
} from "../controllers/tripsControllers.js";

const router = express.Router();

router.get("/", getAllTrips);
router.get("/:id", getTrip);
router.post("/create", createTrip);
router.put("/:id", updateTrip);
router.delete("/:id", deleteTrip);

export default router;
