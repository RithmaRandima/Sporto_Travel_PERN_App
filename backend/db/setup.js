// import { createBooksTable } from "./books.js";
// import { createUsersTable } from "./users.js";
// import { createTravelsTable } from "./travels.js";
import { createProductsTable } from "./products.js";

export async function setupDB() {
  try {
    console.log("Setting up database...");

    // await createBooksTable();
    // await createUsersTable();
    await createProductsTable();
    // await createTravelsTable();

    console.log("All tables created successfully");
  } catch (err) {
    console.error("DB setup failed:", err);
  }
}
