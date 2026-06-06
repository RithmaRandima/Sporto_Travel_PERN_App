import { sql } from "../config/db.js";

export const createBooking = async (req, res) => {
  const {
    user_id,
    trip_id,
    travel_date,
    traveler_type,
    adults,
    children,
    accommodation,
    transportation,
    full_name,
    email,
    phone,
    special_requests,
    total_price,
  } = req.body;

  // required fields validation
  if (
    !user_id ||
    !trip_id ||
    !travel_date ||
    !traveler_type ||
    !full_name ||
    !email
  ) {
    return res.status(400).json({
      success: false,
      message: "Required fields are missing",
    });
  }

  try {
    const newBooking = await sql`
      INSERT INTO bookings (
        user_id,
        trip_id,
        travel_date,
        traveler_type,
        adults,
        children,
        accommodation,
        transportation,
        full_name,
        email,
        phone,
        special_requests,
        total_price
      )
      VALUES (
        ${user_id},
        ${trip_id},
        ${travel_date},
        ${traveler_type},
        ${adults ?? 1},
        ${children ?? 0},
        ${accommodation},
        ${transportation},
        ${full_name},
        ${email},
        ${phone},
        ${special_requests},
        ${total_price}
      )
      RETURNING *
    `;

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: newBooking[0],
    });
  } catch (error) {
    console.log("Error createBooking", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
