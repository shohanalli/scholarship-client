import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import Logo from "../logo/Logo";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Header = () => {
  const { loading, user, setUser, signOutFunction } = useAuth();
  const { handleSubmit } = useForm();
  const [hover, setHover] = useState(false);

  // ---------------- THEME STATE (DaisyUI) ----------------
  const [theme, setTheme] = useState(() => {
    // default: webnion (light)
    return localStorage.getItem("theme") || "webnion";
  });

  useEffect(() => {
    // DaisyUI reads data-theme from <html>
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((p) => (p === "webnion" ? "webnion-night" : "webnion"));
  };
  // ------------------------------------------------------

  const handleSignOut = () => {
    signOutFunction()
      .then(() => {
        setUser(null);
        toast.success("Log Out Successfully");
      })
      .catch((err) => toast.error(err));
  };

  const navLinks = (
    <>
      <NavLink className={"navLInk"} to={"/"}>
        Home
      </NavLink>
      <NavLink className={"navLInk"} to={"/all-scholarship"}>
        All Scholarship
      </NavLink>
    </>
  );

  return (
    <div>
      {/* header wrapper: DaisyUI tokens only */}
      <div className=" bg-base-100 text-base-content shadow-sm py-2 ">
        <div className="navbar w-[97%] lg:w-[95%] mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-ghost text-base-content lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 text-sm font-semibold space-y-5 rounded-box w-52 text-base-content"
              >
                {navLinks}
              </ul>
            </div>

            <div className="hidden md:block">
              <Logo />
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-5 font-semibold text-[15px] text-base-content">
              {navLinks}
            </ul>
          </div>

          <div className="navbar-end gap-3">
            {/* ✅ Theme Toggle Button (Responsive + tokens) */}
            <button
              onClick={toggleTheme}
              className="btn btn-ghost rounded-full border border-base-300 bg-base-100/60 backdrop-blur px-3"
              title="Toggle theme"
              aria-label="Toggle theme"
              type="button"
            >
              <span className="text-lg">
                {theme === "webnion-night" ? "☀️" : "🌙"}
              </span>

              {/* md+ এ শুধু লেখা দেখাবে */}
              <span className="hidden md:inline text-sm font-semibold text-base-content">
                {theme === "webnion-night" ? "Light" : "Dark"}
              </span>
            </button>

            {loading ? (
              <span className="loading loading-spinner loading-xl"></span>
            ) : !user ? (
              <Link
                to={"/login"}
                className="btn bg-primary text-white hover:bg-secondary"
              >
                SingUp/LogIn
              </Link>
            ) : (
              <div
                className="relative"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <img
                  src={user?.photoURL || `https://i.ibb.co.com/spx4GtRN/login.jpg`}
                  alt="User"
                  className="w-12 h-12 rounded-full border-2 border-primary cursor-pointer"
                />

                {hover && (
                  <div className="absolute right-0 w-auto bg-base-100 text-base-content shadow-lg rounded-xl p-3 z-10 border border-base-300">
                    <p className="text-center font-medium">
                      {user?.displayName || "User"}
                    </p>
                    <p className="text-center font-medium">
                      {user?.email || "User"}
                    </p>

                    <Link
                      to={"/dashboard"}
                      className="btn btn-sm mt-2 w-full bg-secondary text-white"
                    >
                      Dashboard
                    </Link>

                    <button
                      onClick={handleSubmit(handleSignOut)}
                      className="btn btn-sm mt-2 w-full bg-primary text-white"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
