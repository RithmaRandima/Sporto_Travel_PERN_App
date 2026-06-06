import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useAppContext } from "../../context/AppContext";
import defaultProfile from "../../assets/big-left-3.jpeg";
import { Camera } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";

const LoginPopup = () => {
  const { setShowLogin, setToken, setUser, url } = useAppContext();

  const [currentState, setCurrentState] = useState("Login");
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    profileImage: null,
  });

  const onChangeHandeler = (event) => {
    setData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onImageChange = (event) => {
    setData((prev) => ({
      ...prev,
      profileImage: event.target.files[0],
    }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const endpoint =
        currentState === "Login"
          ? `${url}/app/v1/users/login`
          : `${url}/app/v1/users/register`;

      let res;

      // 🔥 LOGIN (JSON)
      if (currentState === "Login") {
        res = await axios.post(endpoint, {
          email: data.email,
          password: data.password,
        });
      }

      // 🔥 REGISTER (FORMDATA)
      else {
        const formData = new FormData();

        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("password", data.password);
        formData.append("bio", data.bio);
        formData.append("image", data.profileImage);

        res = await axios.post(endpoint, formData);
      }

      if (res.data.success) {
        setToken(res.data.token);
        setUser(res.data.user);

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        setShowLogin(false);
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error.response?.data || error);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        fixed inset-0 z-100
        flex items-center justify-center
        bg-white/10 backdrop-blur-sm
        px-4
      "
    >
      <form
        onSubmit={onLogin}
        className="
          w-full max-w-md
          bg-[#ffffff]
          border border-neutral-300
          shadow-[0_2px_5px_rgba(0,0,0,0.4)]
          rounded-2xl
          p-5 sm:p-6
          flex flex-col gap-4 sm:gap-5
          relative
          max-h-[90vh]
          overflow-y-auto
        "
      >
        {/* CLOSE */}
        <IoClose
          className="
            absolute top-3 right-3
            text-2xl
            cursor-pointer
            hover:scale-110 transition
            text-gray-400 hover:text-black
          "
          onClick={() => setShowLogin(false)}
        />

        {/* HEADER */}
        <div>
          <h2 className="text-lg sm:text-[24px] font-bold text-black">
            {currentState}
          </h2>

          <p className="text-xs text-gray-500 mt-1">Welcome back to YumRush</p>
        </div>

        {/* SIGN UP ONLY FIELDS */}
        {currentState === "Sign Up" && (
          <>
            <div className="flex items-center gap-3">
              {/* PROFILE IMAGE */}
              <div className="relative -mt-5">
                <label htmlFor="profileImage" className="cursor-pointer">
                  <img
                    src={
                      data.profileImage
                        ? URL.createObjectURL(data.profileImage)
                        : defaultProfile
                    }
                    alt="Profile"
                    className="w-29 h-21.5 rounded-full object-cover border-2 border-neutral-300 shadow-md hover:opacity-80 transition"
                  />
                </label>

                <div className="absolute bottom-0 right-2 p-1 rounded-full border-black bg-white shadow-[0_2px_2px_rgba(0,0,0,0.4)]">
                  <Camera size={18} />
                </div>

                <input
                  id="profileImage"
                  type="file"
                  accept="image/*"
                  onChange={onImageChange}
                  className="hidden"
                  required
                />
              </div>

              {/* NAME */}
              <input
                type="text"
                name="name"
                placeholder="Your Full name"
                value={data.name}
                onChange={onChangeHandeler}
                className="
                p-3 rounded-xl
                bg-[#ffffff]
                shadow-[0_1px_2px_rgba(0,0,0,0.25)]
                border border-neutral-200
                outline-none
                text-sm
                w-full
              "
                required
              />
            </div>

            {/* BIO */}
            <textarea
              name="bio"
              placeholder="Tell us about yourself"
              value={data.bio}
              onChange={onChangeHandeler}
              rows={4}
              className="
                p-3 rounded-xl
                bg-[#ffffff]
                shadow-[0_1px_2px_rgba(0,0,0,0.25)]
                border border-neutral-200
                outline-none
                text-sm
                w-full
                resize-none
              "
              required
            />
          </>
        )}

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={data.email}
          onChange={onChangeHandeler}
          className="
            p-3 rounded-xl
            bg-[#ffffff]
            shadow-[0_1px_2px_rgba(0,0,0,0.25)]
            border border-neutral-200
            outline-none
            text-sm
            w-full
          "
          required
        />

        {/* PASSWORD */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={onChangeHandeler}
          className="
            p-3 rounded-xl
            bg-[#ffffff]
            shadow-[0_1px_2px_rgba(0,0,0,0.25)]
            border border-neutral-200
            outline-none
            text-sm
            w-full
          "
          required
        />

        {/* TERMS */}
        <label className="flex items-start gap-2 text-xs text-gray-500 leading-snug">
          <input type="checkbox" required className="mt-1" />
          <span>By continuing, you agree to our terms & privacy policy.</span>
        </label>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="
            p-3 rounded-xl
            bg-black/85
            hover:bg-black
            text-white
            font-bold text-sm
            transition
            disabled:opacity-50
          "
        >
          {loading
            ? "Please wait..."
            : currentState === "Login"
              ? "Login"
              : "Create account"}
        </button>

        {/* SWITCH */}
        <p className="text-center text-xs sm:text-sm text-gray-400">
          {currentState === "Login" ? (
            <>
              New here?{" "}
              <span
                className="text-[#f00] cursor-pointer"
                onClick={() => setCurrentState("Sign Up")}
              >
                Create account
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="text-[#f00] cursor-pointer"
                onClick={() => setCurrentState("Login")}
              >
                Login
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;
