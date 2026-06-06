import { FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "../SideBar/Sidebar";
import { useAppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import { Settings, CalendarDays, LogOut, ChevronRight } from "lucide-react";

const Navbar = () => {
  // const [user, setUser] = useState(false);
  const {
    navStatus,
    setNavStatus,
    sideBar,
    setShowLogin,
    setSideBar,
    token,
    user,
  } = useAppContext();

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
        </ul>
      </div>
      {/* logo Section */}
      <div className="relative  border-black border-2 pb-1 pr-4">
        <h1 className="font-extrabold text-[17px] text-[#f00]">sporTO.</h1>
        <p className="absolute text-[8px] bottom-[-10px] right-[-10px] bg-black text-white px-2 py-0.5">
          Sport Voyage
        </p>
      </div>

      {/* social section */}
      <div className="flex items-center gap-3 md:gap-4">
        {token ? (
          <div className="relative group">
            {/* Avatar */}
            <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center text-white font-bold text-[15px] md:text-[16px] shadow-lg shadow-black/30">
              <img
                src={`http://localhost:3000/uploads/${user.image_url}`}
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-2 border-neutral-300 shadow-md hover:opacity-80 transition"
              />
            </div>
            {/* Dropdown */}
            <div className="absolute right-0 top-14 w-70 overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.12)] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
              {/* Top Accent */}
              <div className="h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-500" />

              {/* User Info */}
              <div className="p-5 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-black/30">
                    <img
                      src={`http://localhost:3000/uploads/${user.image_url}`}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover border-2 border-neutral-300 shadow-md hover:opacity-80 transition"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-base truncate">
                      {user.name}
                    </h3>

                    <p className="text-sm text-gray-500 truncate">
                      {user.email}
                    </p>

                    <span className="inline-flex mt-2 px-2.5 py-1 rounded-full bg-red-50 text-red-600 text-xs font-medium">
                      Verified Account
                    </span>
                  </div>
                </div>
              </div>

              {/* Menu */}
              <div className="p-2">
                <a
                  href="/settings"
                  className="group/item flex items-center justify-between px-4 py-3 rounded-xl hover:bg-red-50 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <Settings size={18} className="text-red-500" />
                    <span className="font-medium text-gray-800">Settings</span>
                  </div>

                  <ChevronRight
                    size={16}
                    className="text-gray-400 group-hover/item:text-red-500 transition"
                  />
                </a>

                <a
                  href="/bookings"
                  className="group/item flex items-center justify-between px-4 py-3 rounded-xl hover:bg-red-50 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <CalendarDays size={18} className="text-red-500" />
                    <span className="font-medium text-gray-800">
                      My Bookings
                    </span>
                  </div>

                  <ChevronRight
                    size={16}
                    className="text-gray-400 group-hover/item:text-red-500 transition"
                  />
                </a>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-100 p-2">
                <button
                  // onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all duration-200"
                >
                  <LogOut size={18} />
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowLogin(true)}
            className="hidden md:block px-4 py-1 bg-[#f00] text-white font-medium rounded-full shadow-[0_2px_12px_rgba(255,0,0,0.35)] hover:bg-red-700 transition-all duration-200"
          >
            Login
          </button>
        )}
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
