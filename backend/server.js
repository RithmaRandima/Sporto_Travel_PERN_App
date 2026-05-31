import "dotenv/config";

import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";

import { neon } from "@neondatabase/serverless";
import travelRouter from "./routes/productRoutes.js";
import morgan from "morgan";

import { sql } from "./config/db.js";
import { setupDB } from "./db/setup.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// async function setup() {
//   try {
//     console.log("Connection established");

//     // Drop the table if it already exists
//     await sql`DROP TABLE IF EXISTS books;`;
//     console.log("Finished dropping table (if it existed).");

//     // Create a new table
//     await sql`
//       CREATE TABLE books (
//         id SERIAL PRIMARY KEY,
//         title VARCHAR(255) NOT NULL,
//         author VARCHAR(255),
//         publication_year INT,
//         in_stock BOOLEAN DEFAULT TRUE
//       );
//     `;
//     console.log("Finished creating table.");

//     // Insert a single book record
//     await sql`
//       INSERT INTO books (title, author, publication_year, in_stock)
//       VALUES ('The Catcher in the Rye', 'J.D. Salinger', 1951, true);
//     `;
//     console.log("Inserted a single book.");

//     // Data to be inserted
//     const booksToInsert = [
//       {
//         title: "The Hobbit",
//         author: "J.R.R. Tolkien",
//         publication_year: 1937,
//         in_stock: true,
//       },
//       {
//         title: "1984",
//         author: "George Orwell",
//         publication_year: 1949,
//         in_stock: true,
//       },
//       {
//         title: "Dune",
//         author: "Frank Herbert",
//         publication_year: 1965,
//         in_stock: false,
//       },
//     ];

//     // Insert multiple books
//     await sql`
//       INSERT INTO books (title, author, publication_year, in_stock)
//       VALUES (${booksToInsert[0].title}, ${booksToInsert[0].author}, ${booksToInsert[0].publication_year}, ${booksToInsert[0].in_stock}),
//              (${booksToInsert[1].title}, ${booksToInsert[1].author}, ${booksToInsert[1].publication_year}, ${booksToInsert[1].in_stock}),
//              (${booksToInsert[2].title}, ${booksToInsert[2].author}, ${booksToInsert[2].publication_year}, ${booksToInsert[2].in_stock});
//     `;
//     console.log("Inserted 3 rows of data.");
//   } catch (err) {
//     console.error("Connection failed.", err);
//   }
// }

// setup();

app.use("/app/v1/travels", travelRouter);

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
