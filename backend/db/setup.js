import { createBookingsTable } from "./bookings.js";
import { createTrips } from "./trips.js";
import { createUsersTable } from "./user.js";

export async function setupDB() {
  try {
    console.log("Setting up database...");

    await createTrips();
    await createUsersTable();
    await createBookingsTable();

    console.log("All tables created successfully");
  } catch (err) {
    console.error("DB setup failed:", err);
  }
}
