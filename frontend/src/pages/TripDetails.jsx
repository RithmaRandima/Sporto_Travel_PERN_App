import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { serviceBottomData } from "../Data/serviceBottomData";
import { FaClock, FaLocationDot } from "react-icons/fa6";

const TripDetails = () => {
  const { id } = useParams();

  const trip = serviceBottomData.find((item) => item.id === Number(id));

  const [bookingData, setBookingData] = useState({
    date: "",
    travelerType: "Solo",
    adults: 1,
    children: 0,
    fullName: "",
    email: "",
    phone: "",
    specialRequests: "",
    transportation: "",
    accommodation: "",
  });

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

  return (
    <div className="bg-white min-h-screen">
      {/* HERO IMAGE (UNCHANGED) */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img
          src={trip.img}
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
          <div>
            <div className="mb-10">
              <span className="text-red-500 font-semibold uppercase tracking-wider text-sm">
                Explore Destination
              </span>

              <h2 className="text-4xl font-bold text-gray-900 mt-2">
                About {trip.city}
              </h2>

              <p className="mt-5 text-gray-600 leading-8 text-lg">
                {trip.description}
              </p>
            </div>

            {/* TRIP HIGHLIGHTS */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <FaClock className="text-red-500 text-xl" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <h3 className="font-bold text-lg">{trip.days}</h3>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 font-bold text-lg">%</span>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Discount</p>
                    <h3 className="font-bold text-lg text-green-600">
                      {trip.discount}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* EXPERIENCE SECTION */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4">
                Why You'll Love This Trip
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-gray-50">
                  ✈️ Premium travel experience
                </div>

                <div className="p-5 rounded-2xl bg-gray-50">
                  🏨 Comfortable accommodation
                </div>

                <div className="p-5 rounded-2xl bg-gray-50">
                  📍 Top tourist attractions included
                </div>

                <div className="p-5 rounded-2xl bg-gray-50">
                  🎉 Local culture & activities
                </div>
              </div>
            </div>
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

                {/* NAME */}
                <div>
                  <label className="block text-left text-xs text-gray-500 uppercase mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={bookingData.fullName}
                    onChange={onBookingChange}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:border-red-500 outline-none"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-left text-xs text-gray-500 uppercase mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={bookingData.email}
                    onChange={onBookingChange}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:border-red-500 outline-none"
                  />
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
