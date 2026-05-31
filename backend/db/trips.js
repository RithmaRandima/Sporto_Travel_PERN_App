import { sql } from "../config/db.js";

export async function createTrips() {
  await sql`
    CREATE TABLE IF NOT EXISTS trips (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      sport VARCHAR(100) NOT NULL,
      location VARCHAR(255) NOT NULL,
      country VARCHAR(100) NOT NULL,
      duration_days INT NOT NULL,
      price DECIMAL(10,2) NOT NULL,
      image_url TEXT,
      description TEXT,
      difficulty VARCHAR(50),
      season VARCHAR(100),
      rating DECIMAL(2,1),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
}
