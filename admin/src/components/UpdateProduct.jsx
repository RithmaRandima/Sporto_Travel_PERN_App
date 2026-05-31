import React, { useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    shortDescription: "",
    fullDescription: "",
    category: "",
    status: "In Stock",
    oldPrice: "",
    newPrice: "",
    discount: "",
    stock: "",
  });

  const [images, setImages] = useState({
    main: null,
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  });

  const isFile = (val) => val instanceof File;

  const getImageSrc = (img) => {
    if (!img) return null;
    if (isFile(img)) return URL.createObjectURL(img);
    return `http://localhost:4000/images/${img}`;
  };

  const handleChange = (e) => {
    setData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const removeProduct = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:4000/api/products/delete/${id}`,
      );

      if (res.data.success) {
        toast.success("Product deleted");
        navigate("/listProduct");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Delete failed");
    }
  };

  // const handleUpdateProduct = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const formData = new FormData();

  //     // TEXT DATA
  //     Object.keys(data).forEach((key) => {
  //       formData.append(key, data[key]);
  //     });

  //     // IMAGES
  //     if (images.main instanceof File) {
  //       formData.append("mainImage", images.main);
  //     }

  //     ["image1", "image2", "image3", "image4"].forEach((key) => {
  //       if (images[key] instanceof File) {
  //         formData.append(key, images[key]);
  //       }
  //     });

  //     const res = await axios.put(
  //       `http://localhost:4000/api/products/update/${id}`,
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       },
  //     );

  //     if (res.data.success) {
  //       toast.success("Product updated successfully");
  //       navigate("/listProduct");
  //     } else {
  //       toast.error(res.data.message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Update failed");
  //   }
  // };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/products/list/${id}`,
        );

        if (res.data.success) {
          const p = res.data.data;

          setData(p);

          setImages({
            main: p.images.main,
            image1: p.images.gallery?.[0],
            image2: p.images.gallery?.[1],
            image3: p.images.gallery?.[2],
            image4: p.images.gallery?.[3],
          });
        }
      } catch (err) {
        console.log(err);

        toast.error("Failed to load product");
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="min-h-screen bg-[#f6f7fb] p-4 md:p-8 w-full pt-23 md:pt-0">
      {/* HEADER */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            Update Product
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Edit product details and images
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="rounded-lg bg-pink-500 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-pink-600 hover:shadow-md transition-all duration-200"
          >
            Update
          </button>

          <button
            type="button"
            onClick={removeProduct}
            className="rounded-lg bg-white px-5 py-2 text-sm font-medium text-pink-600 border border-pink-200 hover:bg-pink-50 hover:border-pink-300 transition-all duration-200"
          >
            Delete
          </button>
        </div>
      </div>

      <form className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          {/* GENERAL */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
            <h2 className="font-semibold text-gray-800 mb-5">
              General Information
            </h2>

            <div className="grid gap-4">
              {/* NAME */}
              <div>
                <label className="text-xs font-medium text-gray-500 mb-1 block">
                  Product Name
                </label>
                <input
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  placeholder="Product name"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-pink-500 focus:bg-white"
                />
              </div>

              {/* SHORT DESCRIPTION */}
              <div>
                <label className="text-xs font-medium text-gray-500 mb-1 block">
                  Short Description
                </label>
                <textarea
                  name="shortDescription"
                  value={data.shortDescription}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Short description"
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-pink-500 focus:bg-white"
                />
              </div>

              {/* FULL DESCRIPTION */}
              <div>
                <label className="text-xs font-medium text-gray-500 mb-1 block">
                  Full Description
                </label>
                <textarea
                  name="fullDescription"
                  value={data.fullDescription}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Full description"
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-pink-500 focus:bg-white"
                />
              </div>
            </div>
          </div>

          {/* CATEGORY + STATUS */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-xs font-medium text-gray-500 mb-1 block">
                Category
              </label>
              <select
                name="category"
                value={data.category}
                onChange={handleChange}
                className="h-12 w-full rounded-2xl border border-gray-200 px-3 text-sm outline-none focus:border-pink-500 transition"
              >
                <option value="">Select</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-gray-500 mb-1 block">
                Status
              </label>
              <select
                name="status"
                value={data.status}
                onChange={handleChange}
                className="h-12 w-full rounded-2xl border border-gray-200 px-3 text-sm outline-none focus:border-pink-500 transition"
              >
                <option>In Stock</option>
                <option>Out of Stock</option>
              </select>
            </div>
          </div>

          {/* PRICING */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm grid md:grid-cols-2 gap-4">
            {[
              { name: "oldPrice", label: "Old Price" },
              { name: "newPrice", label: "New Price" },
              { name: "discount", label: "Discount" },
              { name: "stock", label: "Stock" },
            ].map((f) => (
              <div key={f.name}>
                <label className="text-xs font-medium text-gray-500 mb-1 block">
                  {f.label}
                </label>
                <input
                  type="number"
                  name={f.name}
                  value={data[f.name]}
                  onChange={handleChange}
                  placeholder={f.label}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-pink-500 focus:bg-white"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-5">
          {/* MAIN IMAGE */}
          <div className="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm">
            <label className="text-sm font-medium text-gray-700 mb-3 block">
              Main Image
            </label>

            <label className="h-56 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer overflow-hidden bg-gray-50 hover:bg-gray-100 transition">
              {images.main ? (
                <img
                  src={getImageSrc(images.main)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <IoIosAddCircle className="text-4xl text-gray-400" />
              )}

              <input
                type="file"
                hidden
                onChange={(e) =>
                  setImages((p) => ({ ...p, main: e.target.files[0] }))
                }
              />
            </label>
          </div>

          {/* GALLERY */}
          <div className="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm">
            <label className="text-sm font-medium text-gray-700 mb-3 block">
              Gallery
            </label>

            <div className="grid grid-cols-2 gap-3">
              {["image1", "image2", "image3", "image4"].map((key) => (
                <label
                  key={key}
                  className="h-24 border border-gray-200 rounded-2xl flex items-center justify-center cursor-pointer overflow-hidden bg-gray-50 hover:bg-gray-100 transition"
                >
                  {images[key] ? (
                    <img
                      src={getImageSrc(images[key])}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <IoIosAddCircle className="text-2xl text-gray-400" />
                  )}

                  <input
                    type="file"
                    hidden
                    onChange={(e) =>
                      setImages((p) => ({
                        ...p,
                        [key]: e.target.files[0],
                      }))
                    }
                  />
                </label>
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
