import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const url = "http://localhost:3000";

  const [sideBar, setSideBar] = useState(false);
  const [navStatus, setNavStatus] = useState("home");
  const [showLogin, setShowLogin] = useState(false);

  // 🔥 initialize from localStorage
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || "";
  });

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
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
