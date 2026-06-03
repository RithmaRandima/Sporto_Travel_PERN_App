import Hero from "../components/Hero/Hero";
import Service from "../components/Service/Service";
import AboutUs from "../components/AboutUs/AboutUs";
import VideoSection from "../components/VideoSection/VideoSection";
import DestinationPicker from "../components/DestinationPicker/DestinationPicker";
import Package from "../components/Package/Package";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Testimonials from "../components/Testimonials/Testimonials";
import StartsSection from "../components/StartsSection/StartsSection";
import HomeCTA from "../components/HomeCTA/HomeCTA";
import BannerSection from "../components/BannerSection/BannerSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <DestinationPicker />
      {/* CTA SECTION 1 */}
      <BannerSection />
      <Service />
      <AboutUs />
      {/* STATS SECTION */}
      <StartsSection />
      <Package />
      <VideoSection />
      {/* CTA SECTION 2 */}
      <NewsLetter />
      <HomeCTA />
      <Testimonials />
    </div>
  );
};

export default Home;
