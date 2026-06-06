import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const url = "http://localhost:3000";

  const [trips, setTrips] = useState([]);
  const [sideBar, setSideBar] = useState(false);
  const [navStatus, setNavStatus] = useState("home");
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  // 🔥 initialize from localStorage
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || "";
  });

  // const [filter, setFilter] = useState("all");
  // const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${url}/app/v1/trips`);
        if (response.data.success) {
          setTrips(response.data.data);
        } else {
          toast.error("Failed to load products");
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchTrips();
  }, []);

  const value = {
    url,
    sideBar,
    setSideBar,
    navStatus,
    setNavStatus,
    showLogin,
    setShowLogin,
    user,
    setUser,
    token,
    setToken,
    trips,
    loading,
    setLoading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
