import { sql } from "../config/db.js";

export async function createBookingsTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS bookings (
      id SERIAL PRIMARY KEY,

      user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      trip_id INT NOT NULL REFERENCES trips(id) ON DELETE CASCADE,

      travel_date DATE NOT NULL,
      traveler_type VARCHAR(50) NOT NULL,

      adults INT NOT NULL DEFAULT 1,
      children INT NOT NULL DEFAULT 0,

      accommodation VARCHAR(50),
      transportation VARCHAR(100),

      full_name VARCHAR(100) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(50),

      special_requests TEXT,

      total_price DECIMAL(10,2),

      status VARCHAR(50) DEFAULT 'pending',

      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
}
