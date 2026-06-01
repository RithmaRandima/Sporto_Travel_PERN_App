import React, { useState, useContext } from "react";
import { IoClose } from "react-icons/io5";
import { useAppContext } from "../../context/AppContext";
// import { StoreContext } from "../../context/StoreContext";
// import axios from "axios";

const LoginPopup = () => {
  // const { url, setToken, setUser, setShowLogin } = useContext(StoreContext);
  const { setShowLogin } = useAppContext();

  const [currentState, setCurrentState] = useState("Login");
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandeler = (event) => {
    setData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onLogin = async (event) => {
    // event.preventDefault();
    // setLoading(true);
    // try {
    //   const endpoint =
    //     currentState === "Login"
    //       ? `${url}/api/user/login`
    //       : `${url}/api/user/register`;
    //   const response = await axios.post(endpoint, data);
    //   if (response.data.success) {
    //     setToken(response.data.token);
    //     setUser(response.data.user);
    //     localStorage.setItem("token", response.data.token);
    //     localStorage.setItem("user", JSON.stringify(response.data.user));
    //     setShowLogin(false);
    //   } else {
    //     alert(response.data.message);
    //   }
    // } catch (error) {
    //   console.log(error);
    //   alert("Something went wrong");
    // } finally {
    //   setLoading(false);
    // }
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
          // onClick={() => setShowLogin(false)}
          onClick={() => setShowLogin(false)}
        />

        {/* HEADER */}
        <div>
          <h2 className="text-lg sm:text-[24px] font-bold text-black">
            {currentState}
          </h2>

          <p className="text-xs text-gray-500 mt-1">Welcome back to YumRush</p>
        </div>

        {/* NAME */}
        {currentState === "Sign Up" && (
          <input
            type="text"
            name="name"
            placeholder="Your name"
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
