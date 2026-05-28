import dotenv from "dotenv";
dotenv.config();

import express, { json } from "express";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(json());
app.use(cors());

app.listen(PORT, () => {
  console.log("Server running on PORT ", PORT);
});
