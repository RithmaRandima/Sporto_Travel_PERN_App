import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { FaUserAlt, FaBars } from "react-icons/fa";
import { MdAssignmentAdd } from "react-icons/md";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

const Sidebar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    {
      name: "Add Product",
      path: "/addProduct",
      icon: <MdAssignmentAdd />,
    },
    {
      name: "List Product",
      path: "/listProduct",
      icon: <HiClipboardDocumentList />,
    },
    {
      name: "List Orders",
      path: "/listOrders",
      icon: <HiClipboardDocumentList />,
    },
  ];

  return (
    <>
      {/* ================= MOBILE TOPBAR ================= */}
      <div className="lg:hidden fixed top-0 left-0 w-full h-16 bg-white/80 backdrop-blur-xl border-b border-pink-100 z-40 flex items-center justify-between px-5 shadow-md">
        <h1 className="text-2xl font-black tracking-wide text-black">
          style<span className="text-pink-500">sync.</span>
        </h1>

        <button
          onClick={() => setMobileOpen(true)}
          className="text-2xl text-pink-500"
        >
          <FaBars />
        </button>
      </div>

      {/* ================= OVERLAY ================= */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <div
        className={`
          sidebar-scroll
          fixed top-0 left-0 z-50
          h-screen w-[280px] lg:w-[18%]
          bg-white/70 backdrop-blur-2xl
          border-r border-pink-100
          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          rounded-r-3xl
          flex flex-col justify-between
          px-5 py-6
          overflow-y-hidden
          transition-all duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* ================= TOP SECTION ================= */}
        <div>
          {/* MOBILE HEADER */}
          <div className="flex items-center justify-between lg:hidden mb-8">
            <h1 className="text-2xl font-black tracking-wide text-black">
              style<span className="text-pink-500">sync.</span>
            </h1>

            <button
              onClick={() => setMobileOpen(false)}
              className="text-3xl text-pink-500"
            >
              <IoClose />
            </button>
          </div>

          {/* DESKTOP LOGO */}
          <div className="hidden lg:block mb-5 text-center">
            <h1 className="text-[25px] font-black tracking-wide text-black">
              style<span className="text-pink-500">sync.</span>
            </h1>
          </div>

          {/* ================= PROFILE ================= */}
          <div className="flex flex-col items-center">
            <div className="w-15 h-15 rounded-full bg-gradient-to-br from-pink-500 to-pink-300 p-[2px] shadow-lg">
              <div className="w-full h-full rounded-full bg-white flex justify-center items-end overflow-hidden">
                <FaUserAlt className="text-[40px] text-gray-700" />
              </div>
            </div>

            <div className="text-center mt-1">
              <p className="font-bold text-[20px] tracking-wide capitalize text-gray-800">
                John Cavil
              </p>

              <p className="uppercase font-bold text-[10px] tracking-[1px] text-pink-500">
                administrator
              </p>
            </div>
          </div>

          {/* ================= MENU ================= */}
          <div className="mt-8 flex flex-col gap-4">
            {menuItems.map((item, index) => {
              const active = location.pathname === item.path;

              return (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                >
                  <div
                    className={`
                      flex items-center gap-4
                      px-5 py-3 rounded-2xl
                      font-semibold text-[15px]
                      transition-all duration-300
                      shadow-sm border border-slate-200 hover:shadow-lg
                      hover:-translate-y-0.5
                      ${
                        active
                          ? "bg-gradient-to-r from-pink-500 to-pink-400 text-white"
                          : "bg-white text-gray-700 hover:bg-pink-50"
                      }
                    `}
                  >
                    <span className="text-xl">{item.icon}</span>

                    <h1>{item.name}</h1>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM CARD ================= */}
        <div className="mt-10">
          <div className="bg-gradient-to-r from-pink-500 to-pink-400 rounded-3xl p-5 text-white shadow-lg">
            <p className="font-bold text-lg">StyleSync Admin</p>

            <p className="text-sm opacity-90 mt-1 leading-relaxed">
              Manage your products beautifully.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
