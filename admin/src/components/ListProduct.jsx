import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { BsShop } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import ListItem from "./ListItem";

const ListProduct = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // const fetchList = async () => {
    //   try {
    //     setLoading(true);
    //     const response = await axios.get(
    //       "http://localhost:4000/api/products/list",
    //     );
    //     if (response.data.success) {
    //       setList(response.data.data);
    //     } else {
    //       toast.error("Failed to load products");
    //     }
    //   } catch (error) {
    //     console.log(error);
    //     toast.error("Something went wrong");
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchList();
  }, []);

  // Filter + Search
  const filteredProducts = useMemo(() => {
    return list.filter((item) => {
      const matchesSearch = item.name
        ?.toLowerCase()
        .includes(search.toLowerCase());

      const matchesFilter =
        filter === "all"
          ? true
          : item.status?.toLowerCase() === filter.toLowerCase();

      return matchesSearch && matchesFilter;
    });
  }, [list, search, filter]);

  return (
    <div className="min-h-screen bg-[#f6f7fb] p-4 md:p-6 xl:p-8 w-full pt-23 md:pt-0">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-pink-600 shadow-sm">
            <BsShop className="text-2xl" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Shop Products
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage your inventory and product collection
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4">
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-1 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Products
            </p>

            <h2 className=" text-[25px] font-bold text-gray-900">
              {list.length}
            </h2>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-1 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Showing
            </p>

            <h2 className="text-[25px] font-bold text-pink-600">
              {filteredProducts.length}
            </h2>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="mb-6 flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
        {/* Search */}
        <div className="relative w-full md:max-w-md">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none transition-all focus:border-pink-500 focus:bg-white"
          />
        </div>

        {/* Filter */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-gray-500">
            <HiOutlineAdjustmentsHorizontal className="text-xl" />
            <span className="text-sm font-medium">Filter</span>
          </div>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="h-12 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition-all focus:border-pink-500 focus:bg-white"
          >
            <option value="all">All Products</option>
            <option value="in stock">In Stock</option>
            <option value="out of stock">Out of Stock</option>
          </select>
        </div>
      </div>

      {/* Product List */}
      <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm md:p-6">
        {/* Loading */}
        {loading ? (
          <div className="grid gap-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="h-24 animate-pulse rounded-2xl bg-gray-100"
              />
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="space-y-4">
            {filteredProducts.map((item) => (
              <ListItem key={item._id} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-pink-100 text-pink-500">
              <BsShop className="text-3xl" />
            </div>

            <h2 className="text-xl font-semibold text-gray-800">
              No Products Found
            </h2>

            <p className="mt-2 max-w-sm text-sm text-gray-500">
              We couldn’t find any products matching your search or filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListProduct;
