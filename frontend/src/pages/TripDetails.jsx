import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaClock, FaLocationDot } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useAppContext } from "../context/AppContext";
import axios from "axios";
import { FaStar } from "react-icons/fa";

const TripDetails = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState({});

  const { url, user, setLoading, loading } = useAppContext();

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${url}/app/v1/trips/${id}`);
        if (response.data.success) {
          setTrip(response.data.data);
        } else {
          toast.error("Failed to load products");
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchTrips();
  }, [id]);

  console.log(trip);

  const [bookingData, setBookingData] = useState({
    date: "",
    travelerType: "Solo",
    adults: 1,
    children: 0,
    transportation: "",
    accommodation: "",
    phone: "",
    specialRequests: "",
  });

  console.log(trip);
  console.log(user);

  const onBookingChange = (e) => {
    setBookingData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (!trip) {
    return (
      <div className="h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Trip not found</h1>
          <Link to="/trips" className="text-red-500 mt-4 inline-block">
            Go back
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          {/* Spinner */}
          <div className="w-12 h-12 border-4 border-gray-200 border-t-red-500 rounded-full animate-spin"></div>

          <p className="text-gray-500 text-sm">Loading trip details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* HERO IMAGE (UNCHANGED) */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img
          src={`http://localhost:3000/uploads/${trip.image_url}`}
          alt={trip.city}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl font-bold">{trip.city}</h1>

          <div className="flex items-center gap-2 mt-2 text-white/80">
            <FaLocationDot />
            <span>{trip.country}</span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-5 py-14">
        <div className="grid lg:grid-cols-[1fr_380px] gap-10">
          {/* LEFT SIDE (UNCHANGED CONTENT) */}
          {/* LEFT */}
          <div>
            {/* HEADER */}
            <div className="mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-50 text-red-600 text-xs font-semibold tracking-wide">
                ✈️ Explore Destination
              </span>

              <h2 className="text-4xl font-bold text-gray-900 mt-4">
                {trip.city}, {trip.country}
              </h2>

              <div className="flex items-center gap-3 mt-3 text-gray-500 text-sm">
                <span className="px-3 py-1 bg-gray-100 rounded-full">
                  {trip.sport}
                </span>

                <span className="px-3 py-1 bg-gray-100 rounded-full">
                  {trip.difficulty}
                </span>

                <span className="px-3 py-1 bg-gray-100 rounded-full">
                  {trip.season}
                </span>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-600 leading-8 text-lg mb-12">
              {trip.description}
            </p>

            {/* STATS CARDS */}
            <div className="grid grid-cols-2 gap-5">
              <div className="p-5 rounded-2xl bg-white border shadow-sm hover:shadow-md transition">
                <p className="text-xs text-gray-400 uppercase">Duration</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {trip.duration_days}{" "}
                  <span className="text-sm font-medium">days</span>
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border shadow-sm hover:shadow-md transition">
                <p className="text-xs text-gray-400 uppercase">Rating</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  ⭐ {trip.rating}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border shadow-sm hover:shadow-md transition">
                <p className="text-xs text-gray-400 uppercase">Max Guests</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {trip.max_people || "∞"}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border shadow-sm hover:shadow-md transition">
                <p className="text-xs text-gray-400 uppercase">Experience</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {trip.featured ? "⭐ Featured" : "Standard"}
                </p>
              </div>
            </div>

            {/* HIGHLIGHT STRIP */}
            {trip.featured && (
              <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
                <p className="text-blue-600 font-semibold">
                  ✨ Premium Curated Experience
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Handpicked trip designed for unforgettable travel moments.
                </p>
              </div>
            )}
          </div>
          {/* RIGHT SIDE - BOOKING FORM */}
          <div className="sticky top-8 h-fit">
            <div className="bg-white border border-gray-200 shadow-2xl rounded-3xl overflow-hidden">
              {/* HEADER */}
              <div className="bg-black text-white px-6 py-4 flex items-center justify-between">
                <h3 className="font-bold text-lg">Book This Trip</h3>
                <span className="text-red-500 font-bold text-sm">HOT DEAL</span>
              </div>

              <form className="p-6 space-y-5">
                {/* DATE */}
                <div>
                  <label className="block text-left text-xs text-gray-500 uppercase tracking-wide mb-1">
                    Travel Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={bookingData.date}
                    onChange={onBookingChange}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:border-red-500 outline-none"
                  />
                </div>

                {/* TRAVELER TYPE */}
                <div>
                  <label className="block text-left text-xs text-gray-500 uppercase tracking-wide mb-1">
                    Traveler Type
                  </label>
                  <select
                    name="travelerType"
                    value={bookingData.travelerType}
                    onChange={onBookingChange}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:border-red-500 outline-none"
                  >
                    <option value="Solo">Solo</option>
                    <option value="Couple">Couple</option>
                    <option value="Family">Family</option>
                    <option value="Group">Group</option>
                  </select>
                </div>

                {/* ADULTS + CHILDREN */}
                <div className="flex gap-3">
                  <div className="w-1/2">
                    <label className="block text-left text-xs text-gray-500 uppercase mb-1">
                      Adults
                    </label>
                    <input
                      type="number"
                      name="adults"
                      value={bookingData.adults}
                      onChange={onBookingChange}
                      min="1"
                      className="w-full p-3 border border-gray-200 rounded-xl focus:border-red-500 outline-none"
                    />
                  </div>

                  <div className="w-1/2">
                    <label className="block text-left text-xs text-gray-500 uppercase mb-1">
                      Children
                    </label>
                    <input
                      type="number"
                      name="children"
                      value={bookingData.children}
                      onChange={onBookingChange}
                      min="0"
                      disabled={
                        bookingData.travelerType === "Solo" ||
                        bookingData.travelerType === "Couple"
                      }
                      className="w-full p-3 border border-gray-200 rounded-xl focus:border-red-500 outline-none disabled:opacity-40"
                    />
                  </div>
                </div>

                {/* ACCOMMODATION */}
                <div className="space-y-3">
                  <label className="block text-left text-[11px] tracking-widest text-gray-400 uppercase">
                    Accommodation
                  </label>

                  <div className="flex gap-8 pt-1">
                    {["Standard", "Deluxe", "Luxury"].map((item) => (
                      <label
                        key={item}
                        className="flex items-center gap-3 cursor-pointer select-none"
                      >
                        <input
                          type="radio"
                          name="accommodation"
                          value={item}
                          checked={bookingData.accommodation === item}
                          onChange={onBookingChange}
                          className="accent-red-500 scale-90"
                        />

                        <span className="text-sm tracking-wide text-gray-700">
                          {item}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* TRANSPORT */}
                <div className="space-y-3">
                  <label className="block text-left text-[11px] tracking-widest text-gray-400 uppercase">
                    Transportation
                  </label>

                  <div className="flex flex-col gap-4 pt-1">
                    {[
                      { label: "No Transport", value: "No" },
                      { label: "Airport Pickup", value: "Airport Pickup" },
                      { label: "Full Travel Package", value: "Full Package" },
                    ].map((item) => (
                      <label
                        key={item.value}
                        className="flex items-center gap-3 cursor-pointer select-none"
                      >
                        <input
                          type="radio"
                          name="transportation"
                          value={item.value}
                          checked={bookingData.transportation === item.value}
                          onChange={onBookingChange}
                          className="accent-red-500 scale-90"
                        />

                        <span className="text-sm tracking-wide text-gray-700">
                          {item.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* PHONE */}
                <div>
                  <label className="block text-left text-xs text-gray-500 uppercase mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={bookingData.phone}
                    onChange={onBookingChange}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:border-red-500 outline-none"
                  />
                </div>

                {/* SPECIAL REQUESTS */}
                <div>
                  <label className="block text-left text-xs text-gray-500 uppercase mb-1">
                    Special Requests
                  </label>
                  <textarea
                    name="specialRequests"
                    value={bookingData.specialRequests}
                    onChange={onBookingChange}
                    rows={3}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:border-red-500 outline-none resize-none"
                  />
                </div>

                {/* PRICE */}
                <div className="bg-black text-white rounded-2xl p-4 flex justify-between items-center">
                  <span className="text-sm">Starting Price</span>
                  <span className="text-xl font-bold text-red-500">
                    ${trip.price}
                  </span>
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl font-bold tracking-wide transition shadow-lg"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
