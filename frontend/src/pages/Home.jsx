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
      <Service />
      <AboutUs />
      <NewsLetter />
      <Package />
      <VideoSection />
      <Testimonials />
    </div>
  );
};

export default Home;
