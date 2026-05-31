import React, { useEffect, useMemo, useRef, useState } from "react";
import parcelIcon from "../assets/parcel-icon.png";
import axios from "axios";
import { toast } from "react-toastify";

/* ===== STATUS CONFIG ===== */
const STATUS_CONFIG = {
  "Food Processing": {
    label: "Processing",
    dot: "bg-yellow-500",
    bg: "bg-yellow-50",
    text: "text-yellow-700",
    border: "border-yellow-200",
  },
  "Out for Delivery": {
    label: "On the way",
    dot: "bg-blue-500",
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
  },
  Delivered: {
    label: "Delivered",
    dot: "bg-emerald-500",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-200",
  },
};

const STATUS_OPTIONS = Object.keys(STATUS_CONFIG);

const OrderItem = React.memo(({ order = {} }) => {
  const {
    items = [],
    amount = 0,
    status: initialStatus = "Food Processing",
    _id = "",
    address,
  } = order;

  const [status, setStatus] = useState(initialStatus);
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  /* TOTAL ITEMS */
  const totalItems = useMemo(() => {
    return items.reduce((acc, item) => acc + (item.quantity || 0), 0);
  }, [items]);

  /* CLOSE DROPDOWN ON OUTSIDE CLICK */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* UPDATE STATUS */
  const updateStatus = async (newStatus) => {
    try {
      const res = await axios.post("http://localhost:4000/api/order/status", {
        orderId: _id,
        status: newStatus,
      });

      if (res.data.success) {
        setStatus(newStatus);
        toast.success(res.data.message || "Updated");
      } else {
        toast.error("Failed to update status");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error updating status");
    }
  };

  const handleStatusChange = (newStatus) => {
    setOpen(false);
    updateStatus(newStatus);
  };

  const statusMeta = STATUS_CONFIG[status] || STATUS_CONFIG["Food Processing"];

  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* HEADER */}
      <div className="mb-5 lg:mb-3 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm">
            <img
              src={parcelIcon}
              className="h-9 w-9 object-contain opacity-90"
              alt="parcel"
            />
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-900">
              Order #{_id?.slice(-6)}
            </h3>

            <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
              <span>{totalItems} items</span>
              <span className="h-1 w-1 rounded-full bg-gray-300" />
              <span className="font-semibold text-amber-600">
                ${Number(amount || 0).toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* STATUS */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen((p) => !p)}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition
              ${statusMeta.bg} ${statusMeta.border} ${statusMeta.text}`}
          >
            <span className={`h-2 w-2 rounded-full ${statusMeta.dot}`} />
            {statusMeta.label}
          </button>

          {open && (
            <div className="absolute right-0 z-30 mt-2 w-48 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
              {STATUS_OPTIONS.map((option) => (
                <button
                  key={option}
                  onClick={() => handleStatusChange(option)}
                  className={`w-full px-4 py-3 text-left text-sm transition
                    ${
                      status === option
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                >
                  {STATUS_CONFIG[option].label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* BODY */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* ITEMS */}
        <div className="rounded-2xl bg-gray-50 p-3 ring-1 ring-gray-200">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-gray-500">
            Items
          </p>

          <div className="space-y-1.5">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-sm shadow-sm ring-1 ring-gray-100"
              >
                {/* left side with bullet */}
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <p className="text-gray-700 text-sm">{item.name}</p>
                </div>

                {/* qty */}
                <span className="text-[11px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                  x{item.quantity}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ADDRESS */}
        <div className="rounded-2xl bg-gray-50 border border-gray-200  p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
            Delivery Address
          </p>

          <p className="text-sm leading-7 text-gray-600">
            {address
              ? `${address.street}, ${address.city}, ${address.state}, ${address.zipCode}, ${address.country}`
              : "No address provided"}
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-5 lg:mt-3 flex flex-col gap-3 border-t border-gray-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div className={`text-sm font-medium ${statusMeta.text}`}>
          {statusMeta.label}
        </div>

        <div className="rounded-xl bg-amber-50 px-4 py-2">
          <p className="text-[11px] uppercase text-gray-500">Total</p>

          <h2 className="text-xl font-bold text-gray-900">
            ${Number(amount || 0).toFixed(2)}
          </h2>
        </div>
      </div>
    </div>
  );
});

export default OrderItem;
