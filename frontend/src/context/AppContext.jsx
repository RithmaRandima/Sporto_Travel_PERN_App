import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [sideBar, setSideBar] = useState(false);
  const [navStatus, setNavStatus] = useState("home");

  const value = {
    sideBar,
    setSideBar,
    navStatus,
    setNavStatus,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
