import express from "express";
import {
  createTrip,
  deleteTrip,
  getAllTrips,
  getTrip,
  updateTrip,
} from "../controllers/tripsControllers.js";
import upload from "../utils/multerConfig.js";

const router = express.Router();

router.get("/", getAllTrips);
router.get("/:id", getTrip);
router.post("/create", upload.single("image"), createTrip);
router.put("/:id", updateTrip);
router.delete("/:id", deleteTrip);

export default router;
