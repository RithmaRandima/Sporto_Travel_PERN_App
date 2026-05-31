import React from "react";
import Sidebar from "../../components/Sidebar";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../../components/AddProduct";
import ListProduct from "../../components/ListProduct";
import UpdateProduct from "../../components/UpdateProduct";
import ListOrders from "../../components/ListOrders";

const Admin = () => {
  return (
    <div className="flex items-start 5">
      <div className="md:w-[290px] lg:w-[22%] bg-gray-900">
        <Sidebar />
      </div>
      <Routes>
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/listProduct" element={<ListProduct />} />
        <Route path="/listOrders" element={<ListOrders />} />
        {/* <Route path="/listProduct/:id" element={<UpdateProduct />} /> */}
      </Routes>
    </div>
  );
};

export default Admin;
