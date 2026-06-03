import { ArrowRight, MapPin } from "lucide-react";

const PackageBox = ({ img, city, desc }) => {
  return (
    <div className="group relative h-[400px] overflow-hidden rounded-3xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
      {/* Image */}
      <img
        src={img}
        alt={city}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Location Badge */}
      <div className="absolute top-2 left-2 z-20">
        <div className="flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-2 py-1 shadow-md">
          <MapPin size={11} className="text-red-500" />
          <span className="text-[10px] font-semibold text-gray-800">
            Popular Destination
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-3 left-0 right-0 z-20 p-6 text-white">
        <div className="translate-y-6 transition-all duration-500 group-hover:translate-y-0">
          <h3 className="mb-2 text-2xl font-bold tracking-tight">{city}</h3>

          <p className="mb-5 line-clamp-3 text-sm leading-6 text-white/85">
            {desc}
          </p>

          <button className="flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-2.5 py-1.5 text-[10px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-black">
            Explore Destination
            <ArrowRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageBox;
