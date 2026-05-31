import { sql } from "../config/db.js";

// get All travels
export const getAllTravels = async (req, res) => {
  try {
    const travels = await sql`
    SELECT * FROM products ORDER BY created_at DESC
    `;

    console.log("fetched Travels", travels);
    res
      .status(200)
      .json({ success: true, message: "Fetched all Data", data: travels });
  } catch (error) {
    console.log("Error getAllTravels", error);
    res.status(400).json({ success: false, message: "Internal Server Error" });
  }
};

// single product
export const getTravel = async (req, res) => {
  const { id } = req.params;

  try {
    const travel = await sql`
    SELECT * FROM products WHERE id=${id}`;

    if (travel.length === 0) {
      res.status(404).json({ success: false, message: "Travel not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Travel fetched", data: travel[0] });
  } catch (error) {
    console.log("Error getTravel", error);
    res.status(400).json({ success: false, message: "Internal Server Error" });
  }
};

// create Travel
export const createTravel = async (req, res) => {
  const { name, price, image } = req.body;

  if (!name || !price || !image) {
    res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const newTravel = await sql`
    INSERT INTO products (name,price,image) VALUES (${name},${price},${image}) RETURNING *`;

    console.log("new Product added", newTravel);

    res
      .status(201)
      .json({ success: true, message: "New Travel added", data: newTravel[0] });
  } catch (error) {
    console.log("Error createTravel", error);
    res.status(400).json({ success: false, message: "Internal Server Error" });
  }
};

// update Travels
export const updateTravel = async (req, res) => {
  const { id } = req.params;
  const { name, image, price } = req.body;

  try {
    const updateTravel = await sql`
    UPDATE products SET name=${name}, price=${price}, image=${image} WHERE id=${id} RETURNING *`;

    if (updateTravel.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Travel not found",
      });
    }
    res.status(201).json({
      success: true,
      message: "Travel Updated",
      data: updateTravel[0],
    });
  } catch (error) {
    console.log("Error in updateTravel", error);
    res.status(400).json({ success: false, message: "Internal Server Error" });
  }
};

// delete Treavel
export const deleteTravel = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteTravel = await sql`
    DELETE FROM products WHERE id=${id} RETURNING *`;

    if (deleteTravel.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Travel not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Travel Deleted",
      data: deleteTravel[0],
    });
  } catch (error) {
    console.log("Error deleteTravel", error);
    res.status(400).json({ success: false, message: "Internal Server Error" });
  }
};
