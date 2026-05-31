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
    console.llog("Error getAllTravels", error);
    res.status(400).json({ success: false, message: "Internal Server Error" });
  }
};

// single product
export const getTravel = (req, res) => {
  const { id } = req.params;

  try {
    const travel = sql`
    SELECT * FROM products WHERE id=${id}`;

    res
      .status(201)
      .json({ success: true, message: "Travel fetched", data: newTravel[0] });
  } catch (error) {
    console.llog("Error getTravel", error);
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
    console.llog("Error createTravel", error);
    res.status(400).json({ success: false, message: "Internal Server Error" });
  }
};

// update Travels
export const updateTravel = (req, res) => {
  const { id } = req.params;
  const { name, image, price } = req.body;

  try {
    const updateTravel = sql`
    UPDATE products SET name=${name}, price=${price}, image=${image} WHERE id=${id} RETURNING *`;

    if ((updateTravel, length === 0)) {
      res.status(404).json({ success: false, message: "Travel npt found" });
    }
    res.status(201).json({
      success: true,
      message: "Travel fetched",
      data: updateTravel[0],
    });
  } catch (error) {
    console.llog("Error in updateTravel", error);
    res.status(400).json({ success: false, message: "Internal Server Error" });
  }
};

// delete Treavel
export const deleteTravel = (req, res) => {
  const { id } = req.params;

  try {
    const deleteTravel = sql`
    DELETE FROM products WHERE id=${id} RETURNING *`;

    if ((deleteTravel, length === 0)) {
      res.status(404).json({ success: false, message: "Travel not found" });
    }

    res.status(200).json({
      success: true,
      message: "Travel Deleted",
      data: deleteTravel[0],
    });
  } catch (error) {
    console.llog("Error deleteTravel", error);
    res.status(400).json({ success: false, message: "Internal Server Error" });
  }
};
