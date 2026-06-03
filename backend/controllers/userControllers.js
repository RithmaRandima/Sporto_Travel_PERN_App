import bcrypt from "bcrypt";
import { sql } from "../config/db.js";
import jwt from "jsonwebtoken";

// login
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  try {
    const user = await sql`
      SELECT * FROM users WHERE email = ${email}
    `;

    if (user.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user[0].password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        userId: user[0].id,
        email: user[0].email,
        role: user[0].role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: user[0],
    });
  } catch (error) {
    console.log("Error login:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// register
export const register = async (req, res) => {
  const { name, email, password, bio } = req.body;
  const profileImg = req.file?.filename;

  if (!name || !email || !password || !bio) {
    return res.status(400).json({
      success: false,
      message: "Required fields are missing",
    });
  }

  try {
    // Check if user exists
    const userCheck = await sql`
      SELECT * FROM users
      WHERE email = ${email}
    `;

    if (userCheck.length > 0) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await sql`
      INSERT INTO users (name, email, password, image_url, bio)
      VALUES (
        ${name},
        ${email},
        ${hashedPassword},
        ${profileImg},
        ${bio}
      )
      RETURNING *
    `;

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: newUser[0],
    });
  } catch (error) {
    console.log("Error register:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
