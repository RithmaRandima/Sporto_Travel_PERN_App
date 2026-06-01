import home_video from "../../assets/VideoSection.mp4";
import { FaPlayCircle } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const VideoSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-center justify-center  py-20 px-7 w-[100%]">
        <p className="heading-name text-[#f00] text-[17px] md:text-[30px] tracking-[2px]">
          Choose your Trip
        </p>
        <h1 className="heading-name leading-18 md:leading-0 mx-auto text-black rotate-[-5deg] text-[65px] md:text-[100px] tracking-[4px] md:mt-[60px] font-extrabold ">
          Start your Vacation
        </h1>
        <p className="leading-10 text-[16px] md:text-[20px] mb-3 md:w-[80%] mt-8 md:mt-23">
          Looking for your dream vacation destination but not sure where to
          start? Our experienced and knowledgeable travel experts are here to
          guide you every step of the way. From hidden gems to popular hotspots,
          we help you discover the perfect places that match your style, budget,
          and vibe. Whether it’s a relaxing getaway or an adventurous journey,
          we make planning your trip effortless and enjoyable so you can focus
          on creating unforgettable memories.
        </p>
      </div>
      <div className="h-[60vh] md:h-[80vh] w-[100%] mx-auto bg-black my-6 relative">
        <video
          autoPlay
          loop
          muted
          id="video"
          className="w-[100%] h-[60vh] md:h-[80vh] object-cover"
        >
          <source src={home_video} type="video/mp4" />
        </video>

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute w-[100%] h-[100%] bg-black/50 top-0 left-0 flex flex-col justify-center items-center text-white">
          <h1 className=" text-[40px] md:text-[80px] mb-3">
            Travel
            <span className="text-[#f00] ml-4 font-bold">
              <ReactTyped strings={["Itineraries"]} typeSpeed={490} loop />
            </span>
          </h1>
          <p className="w-[90%] font-[100] leading-6 md:w-[600px]">
            Looking for your dream vacation destination but don't know where to
            start? With the help of experienced and knowledgeable travel agents,
            you can plan the trip of a lifetime with ease.
          </p>

          <div className="mt-6">
            <FaPlayCircle className="text-[#f00] text-[55px] hover:text-white hover:scale-110 duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
