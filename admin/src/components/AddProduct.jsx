import React, { useMemo, useState } from "react";
import axios from "axios";
import { IoIosAddCircle } from "react-icons/io";
import { RiStickyNoteAddFill } from "react-icons/ri";
import { FiPackage, FiDollarSign, FiImage } from "react-icons/fi";

const AddProduct = () => {
  const [loading, setLoading] = useState(false);

  const [sizes, setSizes] = useState({
    xs: false,
    s: false,
    m: false,
    l: false,
    xl: false,
  });

  const [images, setImages] = useState({
    mainImage: null,
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  });

  const [data, setData] = useState({
    name: "",
    shortDescription: "",
    fullDescription: "",
    category: "men",
    status: "In Stock",
    oldPrice: "",
    newPrice: "",
    discount: "",
    stock: "",
  });

  const selectedSizes = useMemo(() => {
    return Object.keys(sizes).filter((size) => sizes[size]);
  }, [sizes]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (key, file) => {
    setImages((prev) => ({
      ...prev,
      [key]: file,
    }));
  };

  const resetForm = () => {
    setData({
      name: "",
      shortDescription: "",
      fullDescription: "",
      category: "men",
      status: "In Stock",
      oldPrice: "",
      newPrice: "",
      discount: "",
      stock: "",
    });

    setImages({
      mainImage: null,
      image1: null,
      image2: null,
      image3: null,
      image4: null,
    });

    setSizes({
      xs: false,
      s: false,
      m: false,
      l: false,
      xl: false,
    });
  };

  const onSubmitHandler = async (e) => {
    // e.preventDefault();
    // try {
    //   setLoading(true);
    //   const formData = new FormData();
    //   Object.entries(data).forEach(([key, value]) => {
    //     formData.append(key, value);
    //   });
    //   formData.append("sizes", JSON.stringify(selectedSizes));
    //   Object.entries(images).forEach(([key, value]) => {
    //     if (value) {
    //       formData.append(key, value);
    //     }
    //   });
    //   const response = await axios.post(
    //     "http://localhost:4000/api/products/add",
    //     formData,
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     },
    //   );
    //   if (response.data.success) {
    //     resetForm();
    //     alert(response.data.message);
    //   } else {
    //     alert("Failed to add product");
    //   }
    // } catch (error) {
    //   console.log(error);
    //   alert("Something went wrong");
    // } finally {
    //   setLoading(false);
    // }
  };

  const ImageUploadBox = ({ id, file, large = false }) => (
    <label
      htmlFor={id}
      className={`group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-dashed border-gray-300 bg-gray-50 transition-all duration-300 hover:border-pink-500 hover:bg-pink-50
      ${large ? "h-[260px] w-full" : "h-[78px] w-full"}
      `}
    >
      {file ? (
        <img
          src={URL.createObjectURL(file)}
          alt="preview"
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex flex-col items-center gap-2 text-gray-400 group-hover:text-pink-500">
          <IoIosAddCircle className={`${large ? "text-6xl" : "text-3xl"}`} />
          {large && <p className="text-sm font-medium">Upload Main Image</p>}
        </div>
      )}

      <input
        hidden
        type="file"
        id={id}
        accept="image/*"
        onChange={(e) => handleImageChange(id, e.target.files[0])}
      />
    </label>
  );

  return (
    <div className="min-h-screen bg-[#f6f7fb] p-4 md:p-6 xl:p-8 w-full pt-23 md:pt-0">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-pink-600 shadow-sm">
            <RiStickyNoteAddFill className="text-3xl" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Add New Product
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Create and manage your store inventory
            </p>
          </div>
        </div>

        <button
          type="submit"
          form="productForm"
          disabled={loading}
          className="flex items-center justify-center rounded-xl bg-black px-6 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-pink-600 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Adding Product..." : "Add Product"}
        </button>
      </div>

      {/* Main Grid */}
      <form
        id="productForm"
        onSubmit={onSubmitHandler}
        className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_380px]"
      >
        {/* LEFT */}
        <div className="space-y-6">
          {/* General Info */}
          <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <div className="mb-6 flex items-center gap-2">
              <FiPackage className="text-xl text-pink-600" />
              <h2 className="text-lg font-semibold text-gray-800">
                General Information
              </h2>
            </div>

            <div className="space-y-5">
              {/* Product Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Product Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  placeholder="Enter product name"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-pink-500 focus:bg-white"
                />
              </div>

              {/* Short Description */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Short Description
                </label>

                <textarea
                  rows={3}
                  name="shortDescription"
                  value={data.shortDescription}
                  onChange={handleChange}
                  placeholder="Write short description..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-pink-500 focus:bg-white"
                />
              </div>

              {/* Full Description */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full Description
                </label>

                <textarea
                  rows={6}
                  name="fullDescription"
                  value={data.fullDescription}
                  onChange={handleChange}
                  placeholder="Write full product description..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-pink-500 focus:bg-white"
                />
              </div>

              {/* Sizes + Category */}
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {/* Sizes */}
                <div>
                  <label className="mb-3 block text-sm font-medium text-gray-700">
                    Available Sizes
                  </label>

                  <div className="flex flex-wrap gap-2">
                    {["xs", "s", "m", "l", "xl"].map((size) => (
                      <button
                        type="button"
                        key={size}
                        onClick={() =>
                          setSizes((prev) => ({
                            ...prev,
                            [size]: !prev[size],
                          }))
                        }
                        className={`flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-semibold uppercase transition-all
                          ${
                            sizes[size]
                              ? "border-pink-500 bg-pink-500 text-white shadow-md"
                              : "border-gray-200 bg-gray-100 text-gray-700 hover:border-pink-300"
                          }
                        `}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="mb-3 block text-sm font-medium text-gray-700">
                    Category
                  </label>

                  <div className="flex flex-wrap gap-3">
                    {["men", "women", "kids"].map((category) => (
                      <label
                        key={category}
                        className={`cursor-pointer rounded-xl border px-4 py-3 text-sm font-medium capitalize transition-all
                          ${
                            data.category === category
                              ? "border-pink-500 bg-pink-50 text-pink-600"
                              : "border-gray-200 bg-white text-gray-700"
                          }
                        `}
                      >
                        <input
                          hidden
                          type="radio"
                          name="category"
                          value={category}
                          checked={data.category === category}
                          onChange={handleChange}
                        />
                        {category}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Status */}
          <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <div className="mb-5 flex items-center gap-2">
              <FiPackage className="text-xl text-pink-600" />

              <h2 className="text-lg font-semibold text-gray-800">
                Product Status
              </h2>
            </div>

            <select
              name="status"
              value={data.status}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-pink-500 focus:bg-white"
            >
              <option value="In Stock">In Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {/* Upload Images */}
          <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <div className="mb-5 flex items-center gap-2">
              <FiImage className="text-xl text-pink-600" />

              <h2 className="text-lg font-semibold text-gray-800">
                Upload Images
              </h2>
            </div>

            {/* Main Image */}
            <ImageUploadBox id="mainImage" file={images.mainImage} large />

            {/* Gallery */}
            <div className="mt-4 grid grid-cols-4 gap-3">
              {["image1", "image2", "image3", "image4"].map((img) => (
                <ImageUploadBox key={img} id={img} file={images[img]} />
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <div className="mb-5 flex items-center gap-2">
              <FiDollarSign className="text-xl text-pink-600" />

              <h2 className="text-lg font-semibold text-gray-800">
                Pricing & Stock
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Old Price
                </label>

                <input
                  type="number"
                  name="oldPrice"
                  value={data.oldPrice}
                  onChange={handleChange}
                  placeholder="0.00"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-pink-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  New Price
                </label>

                <input
                  type="number"
                  name="newPrice"
                  value={data.newPrice}
                  onChange={handleChange}
                  placeholder="0.00"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-pink-500 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Discount %
                  </label>

                  <input
                    type="number"
                    name="discount"
                    value={data.discount}
                    onChange={handleChange}
                    placeholder="10"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-pink-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Stock
                  </label>

                  <input
                    type="number"
                    name="stock"
                    value={data.stock}
                    onChange={handleChange}
                    placeholder="50"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-pink-500 focus:bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
