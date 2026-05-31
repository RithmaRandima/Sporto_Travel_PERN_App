import { FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "../SideBar/Sidebar";
import { useAppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { navStatus, setNavStatus, sideBar, setSideBar } = useAppContext();

  return (
    <div className="sticky top-[0px] z-[100] flex justify-between items-center  w-full bg-white shadow-lg px-6 py-3 pb-4 md:py-0 md:pb-0">
      {/* link Items section */}
      <div className="hidden md:block">
        <ul className="flex">
          <li
            className="flex items-center"
            onClick={() => setNavStatus("home")}
          >
            <Link
              to="/"
              className={navStatus === "home" ? "text-[#f00]" : "text-black"}
            >
              Home{" "}
            </Link>
            <span className="text-red-600 text-[60px] mx-2 -mt-2"> &#183;</span>
          </li>

          <li
            className="flex items-center"
            onClick={() => setNavStatus("about")}
          >
            <Link
              to="/about"
              className={navStatus === "about" ? "text-[#f00]" : "text-black"}
            >
              About
            </Link>
            <span className="text-red-600 text-[60px] mx-2 -mt-2"> &#183;</span>
          </li>

          <li
            className="flex items-center"
            onClick={() => setNavStatus("packages")}
          >
            <Link
              to="/packages"
              className={
                navStatus === "packages" ? "text-[#f00]" : "text-black"
              }
            >
              Packages
            </Link>
            <span className="text-red-600 text-[60px] mx-2 -mt-2"> &#183;</span>
          </li>

          <li
            className="flex items-center"
            onClick={() => {
              setNavStatus("destination");
            }}
          >
            <Link
              to="/destinations"
              className={
                navStatus === "destination" ? "text-[#f00]" : "text-black"
              }
            >
              Destination
            </Link>
            <span className="text-red-600 text-[60px] mx-2 -mt-2"> &#183;</span>
          </li>

          <li
            className="flex items-center"
            onClick={() => setNavStatus("blog")}
          >
            <Link
              to="/blog"
              className={navStatus === "blog" ? "text-[#f00]" : "text-black"}
            >
              Blog
            </Link>
            <span className="text-red-600 text-[60px]  mx-2 -mt-2">
              {" "}
              &#183;
            </span>
          </li>

          <li
            className="flex items-center"
            onClick={() => {
              setNavStatus("contact");
              setSideBar(true);
            }}
          >
            <Link
              to="/"
              className={navStatus === "contact" ? "text-[#f00]" : "text-black"}
            >
              Contact
            </Link>
            <span className="text-red-600 text-[60px] mx-2 -mt-2"> &#183;</span>
          </li>
        </ul>
      </div>
      {/* logo Section */}
      <div className="relative  border-black border-2 pb-1 pr-5">
        <h1 className="text-[18px] font-bold">
          Classy
          <span className="font-extrabold text-[23px] text-[#f00]">
            Fit
          </span>{" "}
        </h1>
        <p className="absolute text-[11px] bottom-[-10px] right-[-10px] bg-black text-white px-1">
          sport Experience
        </p>
      </div>

      {/* social section */}
      <div className="flex items-center gap-4">
        <div
          className={sideBar === true ? " text-[#f00] cursor-pointer" : " "}
          onClick={() => setSideBar(!sideBar)}
        >
          {sideBar === true ? (
            <FaTimes className="text-[25px]" />
          ) : (
            <FaBars className="text-[25px]" />
          )}
        </div>

        <button className="hidden md:block">Search</button>
      </div>

      {/* sidebar */}

      <Sidebar
        sideBar={sideBar}
        setSideBar={setSideBar}
        setNavStatus={setNavStatus}
      />
    </div>
  );
};

export default Navbar;
