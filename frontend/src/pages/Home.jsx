import Hero from "../components/Hero/Hero";
import Service from "../components/Service/Service";
import AboutUs from "../components/AboutUs/AboutUs";
import VideoSection from "../components/VideoSection/VideoSection";
import DestinationPicker from "../components/DestinationPicker/DestinationPicker";
import Package from "../components/Package/Package";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />

      <DestinationPicker />

      {/* CTA SECTION 1 */}
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
                From football tournaments and cricket tours to Formula 1
                weekends and adventure escapes, we create unforgettable travel
                experiences for passionate fans and explorers.
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

      <Service />

      <AboutUs />

      {/* STATS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "25K+", label: "Happy Travelers" },
              { value: "120+", label: "Destinations" },
              { value: "75+", label: "Countries" },
              { value: "12+", label: "Years Experience" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-4xl font-bold text-red-500">
                  {item.value}
                </h3>

                <p className="text-gray-600 mt-3">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsLetter />

      <Package />

      <VideoSection />

      {/* CTA SECTION 2 */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-red-400 uppercase tracking-[6px]">
            Adventure Awaits
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
            Ready For Your Next Journey?
          </h2>

          <p className="text-gray-300 mt-6 max-w-2xl mx-auto leading-8">
            Discover incredible destinations, unforgettable sporting events,
            breathtaking adventures, and experiences designed for travelers who
            want more than just a vacation.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button className="bg-red-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition">
              Book Now
            </button>

            <button className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default Home;
