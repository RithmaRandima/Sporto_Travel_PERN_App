import "dotenv/config";

import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";

import { neon } from "@neondatabase/serverless";
import tripsRouter from "./routes/tripsRoutes.js";
import morgan from "morgan";

import { sql } from "./config/db.js";
import { setupDB } from "./db/setup.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/app/v1/trips", tripsRouter);

const initDB = async () => {
  try {
    await sql`SELECT 1`;
    console.log("DB connected successfully");
  } catch (e) {
    console.log("Error initDB", e);
  }
};

initDB().then(() => {
  setupDB();
  // routes
  app.listen(PORT, () => {
    console.log("Server running on PORT ", PORT);
  });
});
