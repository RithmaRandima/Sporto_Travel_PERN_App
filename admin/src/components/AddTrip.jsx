import React, { useState, useMemo, useRef, useEffect } from "react";
import axios from "axios";
import { IoIosAddCircle } from "react-icons/io";
import { RiStickyNoteAddFill } from "react-icons/ri";
import { FiPackage, FiDollarSign, FiImage } from "react-icons/fi";

const AddTrip = () => {
  const [loading, setLoading] = useState(false);

  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const [data, setData] = useState({
    title: "",
    sport: "",
    location: "",
    country: "",
    duration_days: "",
    price: "",
    description: "",
    difficulty: "easy",
    season: "",
    rating: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (file) => {
    setImage(file);
  };

  const resetForm = () => {
    setData({
      title: "",
      sport: "",
      location: "",
      country: "",
      duration_days: "",
      price: "",
      description: "",
      difficulty: "easy",
      season: "",
      rating: "",
    });

    setImage(null);
  };

  const previewUrl = useMemo(() => {
    if (!image) return null;
    return URL.createObjectURL(image);
  }, [image]);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      if (image) {
        formData.append("image", image);
      }

      const response = await axios.post(
        "http://localhost:3000/app/v1/trips/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      if (response.data.success) {
        alert(response.data.message);
        resetForm();
      } else {
        alert("Failed to add trip");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const ImageUploadBox = () => {
    const handleClick = () => {
      fileInputRef.current?.click();
    };

    const handleFileChange = (e) => {
      const file = e.target.files?.[0];
      if (file) setImage(file);
    };

    return (
      <div
        onClick={handleClick}
        className="group relative flex h-[260px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-dashed border-gray-300 bg-gray-50 hover:border-pink-500 hover:bg-pink-50"
      >
        {image ? (
          <img
            src={previewUrl}
            alt="preview"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-gray-400 group-hover:text-pink-500">
            <IoIosAddCircle className="text-6xl" />
            <p className="text-sm font-medium">Upload Trip Image</p>
          </div>
        )}

        <input
          ref={fileInputRef}
          hidden
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6 xl:p-8 w-full pt-23 md:pt-0">
      {/* HEADER */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-lg">
            <RiStickyNoteAddFill className="text-2xl" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">Add New Trip</h1>
            <p className="text-sm text-gray-500">
              Create and manage adventure listings
            </p>
          </div>
        </div>

        <button
          type="submit"
          form="tripForm"
          disabled={loading}
          className="rounded-xl bg-gradient-to-r from-black to-gray-800 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
        >
          {loading ? "Creating..." : "Create Trip"}
        </button>
      </div>

      {/* FORM GRID */}
      <form
        id="tripForm"
        onSubmit={onSubmitHandler}
        className="grid grid-cols-1 gap-6 xl:grid-cols-3"
      >
        {/* LEFT CARD */}
        <div className="xl:col-span-2 space-y-6">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Trip Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="title"
                value={data.title}
                onChange={handleChange}
                placeholder="Trip Title"
                className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-pink-500 focus:bg-white"
              />

              <input
                name="sport"
                value={data.sport}
                onChange={handleChange}
                placeholder="Sport (e.g. Hiking)"
                className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-pink-500 focus:bg-white"
              />

              <input
                name="location"
                value={data.location}
                onChange={handleChange}
                placeholder="Location"
                className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-pink-500 focus:bg-white"
              />

              <input
                name="country"
                value={data.country}
                onChange={handleChange}
                placeholder="Country"
                className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-pink-500 focus:bg-white"
              />
            </div>

            <textarea
              name="description"
              value={data.description}
              onChange={handleChange}
              placeholder="Trip Description..."
              rows={5}
              className="mt-4 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-pink-500 focus:bg-white"
            />

            <input
              name="season"
              value={data.season}
              onChange={handleChange}
              placeholder="Season (e.g. Summer)"
              className="mt-4 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-pink-500 focus:bg-white"
            />
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          {/* IMAGE CARD */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-sm font-semibold text-gray-600">
              Upload Image
            </h2>
            <ImageUploadBox />
          </div>

          {/* META CARD */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm space-y-4">
            <input
              type="number"
              name="duration_days"
              value={data.duration_days}
              onChange={handleChange}
              placeholder="Duration (days)"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-pink-500 focus:bg-white"
            />

            <input
              type="number"
              name="price"
              value={data.price}
              onChange={handleChange}
              placeholder="Price"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-pink-500 focus:bg-white"
            />

            <select
              name="difficulty"
              value={data.difficulty}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-pink-500 focus:bg-white"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>

            <input
              type="number"
              name="rating"
              value={data.rating}
              onChange={handleChange}
              placeholder="Rating (0-5)"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-pink-500 focus:bg-white"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTrip;
