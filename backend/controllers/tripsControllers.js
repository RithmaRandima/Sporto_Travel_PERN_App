import { sql } from "../config/db.js";

// get All travels
export const getAllTrips = async (req, res) => {
  try {
    const travels = await sql`
    SELECT * FROM trips ORDER BY created_at DESC
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
export const getTrip = async (req, res) => {
  const { id } = req.params;

  try {
    const travel = await sql`
    SELECT * FROM trips WHERE id=${id}`;

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
export const createTrip = async (req, res) => {
  const {
    title,
    sport,
    location,
    country,
    duration_days,
    price,
    description,
    difficulty,
    season,
    rating,
  } = req.body;

  const image_url = req.file?.filename;

  if (!title || !sport || !location || !country || !duration_days || !price) {
    return res.status(400).json({
      success: false,
      message: "Required fields are missing",
    });
  }

  try {
    const newTrip = await sql`
      INSERT INTO trips (
        title,
        sport,
        location,
        country,
        duration_days,
        price,
        image_url,
        description,
        difficulty,
        season,
        rating
      )
      VALUES (
        ${title},
        ${sport},
        ${location},
        ${country},
        ${duration_days},
        ${price},
        ${image_url},
        ${description},
        ${difficulty},
        ${season},
        ${rating}
      )
      RETURNING *
    `;

    res.status(201).json({
      success: true,
      message: "New trip added",
      data: newTrip[0],
    });
  } catch (error) {
    console.log("Error createTrip", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// update Travels
export const updateTrip = async (req, res) => {
  const { id } = req.params;

  const {
    title,
    sport,
    location,
    country,
    duration_days,
    price,
    image_url,
    description,
    difficulty,
    season,
    rating,
  } = req.body;

  try {
    const updatedTrip = await sql`
      UPDATE trips
      SET
        title = ${title},
        sport = ${sport},
        location = ${location},
        country = ${country},
        duration_days = ${duration_days},
        price = ${price},
        image_url = ${image_url},
        description = ${description},
        difficulty = ${difficulty},
        season = ${season},
        rating = ${rating}
      WHERE id = ${id}
      RETURNING *
    `;

    if (updatedTrip.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Trip not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Trip updated",
      data: updatedTrip[0],
    });
  } catch (error) {
    console.log("Error updateTrip", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// delete Treavel
export const deleteTrip = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteTravel = await sql`
    DELETE FROM trips WHERE id=${id} RETURNING *`;

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
