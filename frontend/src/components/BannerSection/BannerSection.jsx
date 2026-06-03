const BannerSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-red-600 to-red-500 rounded-[32px] overflow-hidden shadow-2xl">
        <div className="grid md:grid-cols-2 items-center">
          <div className="p-10 md:p-16 text-white">
            <p className="uppercase tracking-[6px] text-red-100">
              Sports Travel
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
              Experience The World's Biggest Sporting Events
            </h2>

            <p className="mt-6 text-white/90 leading-8">
              From football tournaments and cricket tours to Formula 1 weekends
              and adventure escapes, we create unforgettable travel experiences
              for passionate fans and explorers.
            </p>

            <button className="mt-8 bg-white text-red-500 px-7 py-3 rounded-full font-semibold hover:scale-105 transition">
              Explore Packages
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200"
            alt="Sports Travel"
            className="h-full w-full object-cover min-h-[350px]"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
