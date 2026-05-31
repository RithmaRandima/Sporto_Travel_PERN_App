import React from "react";
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin/Admin";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import ListProduct from "./components/ListProduct";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div>
      <Admin />
      <ToastContainer />
    </div>
  );
};

export default App;
