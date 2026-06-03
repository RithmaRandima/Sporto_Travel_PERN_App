const HomeCTA = () => {
  return (
    <section className="py-18 bg-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-red-400 uppercase tracking-[6px]">
          Adventure Awaits
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
          Ready For Your Next Journey?
        </h2>

        <p className="text-gray-300 mt-6 max-w-2xl mx-auto leading-8">
          Discover incredible destinations, unforgettable sporting events,
          breathtaking adventures, and experiences designed for travelers who
          want more than just a vacation.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <button className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition">
            Book Now
          </button>

          <button className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
