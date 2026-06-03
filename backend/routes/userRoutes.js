import express from "express";
import { login, register } from "../controllers/userControllers.js";
import upload from "../utils/multerConfig.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", upload.single("image"), register);

export default router;
