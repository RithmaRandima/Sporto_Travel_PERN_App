import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BsBoxSeam } from "react-icons/bs";
import { FiPackage } from "react-icons/fi";
import OrderItem from "./OrderItem";

const ListOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchList = async () => {
  //     try {
  //       setLoading(true);

  //       const response = await axios.get(
  //         "http://localhost:4000/api/order/list",
  //       );

  //       if (response.data.success) {
  //         setOrders(response.data.orders);
  //       } else {
  //         toast.error("Failed to load orders");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       toast.error("Something went wrong");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchList();
  // }, []);

  return (
    <div className="min-h-screen pt-23 md:pt-0 w-full bg-[#f6f7fb] p-4 md:p-6 xl:p-8">
      {/* HEADER */}
      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 shadow-sm">
            <BsBoxSeam className="text-2xl" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Orders Management
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Track and manage all customer orders
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className="flex items-center gap-2">
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-2 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Total Orders
            </p>

            <h2 className=" text-[25px] font-bold text-gray-900">
              {orders.length}
            </h2>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-2 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Status
            </p>

            <h2 className="text-[25px] font-bold text-pink-500 animate-pulse">
              Active
            </h2>
          </div>
        </div>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm md:p-6">
        {/* LOADING */}
        {loading ? (
          <div className="grid gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-28 animate-pulse rounded-2xl bg-gray-100"
              />
            ))}
          </div>
        ) : orders.length > 0 ? (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order._id}
                className="transition duration-200 hover:-translate-y-1"
              >
                <OrderItem order={order} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-500">
              <FiPackage className="text-3xl" />
            </div>

            <h2 className="text-xl font-semibold text-gray-800">
              No Orders Found
            </h2>

            <p className="mt-2 max-w-sm text-sm text-gray-500">
              There are currently no orders to display.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListOrders;
