import { sql } from "../config/db.js";

export async function createUsersTable() {
  await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        image_url TEXT,
        bio TEXT,
        role VARCHAR(50) DEFAULT 'user',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

  await sql`
INSERT INTO users (name, email, password, image_url, bio, role)
VALUES
(
  'Randy Silva',
  'randy@gmail.com',
  '$2b$10$examplehashedpassword1',
  'https://i.pravatar.cc/150?img=3',
  'I love surfing and adventure travel.',
  'user'
),
(
  'John Doe',
  'john@gmail.com',
  '$2b$10$examplehashedpassword2',
  'https://i.pravatar.cc/150?img=5',
  'Mountain hiking is my passion.',
  'user'
),
(
  'Admin User',
  'admin@gmail.com',
  '$2b$10$examplehashedpassword3',
  'https://i.pravatar.cc/150?img=8',
  'Platform administrator.',
  'admin'
),
(
  'Sara Fernando',
  'sara@gmail.com',
  '$2b$10$examplehashedpassword4',
  'https://i.pravatar.cc/150?img=10',
  'Diving and ocean explorer.',
  'user'
);
`;
}
