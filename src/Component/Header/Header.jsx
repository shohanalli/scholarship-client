import React, {  useState } from 'react';

import { Link, NavLink } from 'react-router';
import Logo from '../logo/Logo';
import useAuth from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Header = () => {
const {loading, user, setUser, signOutFunction,} = useAuth();
const {handleSubmit} = useForm();
const [hover, setHover] = useState(false)
const handleSignOut = () =>{
signOutFunction()
.then(()=>{
  setUser(null)
  toast.success('Log Out Successfully')
})
.catch((err)=> toast.error(err))
}
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
       <div className=" bg-base-100 shadow-sm py-2">
      <div className="navbar w-[97%] lg:w-[95%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost text-secondary lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white text-sm font-semibold space-y-5  rounded-box w-52 text-secondary"
            >
              {navLinks}
            </ul>
          </div>
            <div>
                {<Logo />}
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex gap-5 font-semibold text-[15px] text-secondary">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {loading ? (
            <Circles height="50" width="50" color="#FF5A3C" />
          ) : !user ? (
            <Link to={"/login"} className="btn  bg-primary hover:text-white hover:bg-secondary">
              SingUp/LogIn
            </Link>
          ) : (
            <div
              className="relative"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <img
                src={
                  user?.photoURL || `https://i.ibb.co.com/spx4GtRN/login.jpg`
                }
                alt="User"
                className="w-12 h-12 rounded-full border-2 border-primary cursor-pointer"
              />

              {hover && (
                <div className="absolute right-0 w-auto bg-white shadow-lg rounded-xl p-3 text-gray-800 z-10">
                  <p className="text-center font-medium">
                    {user?.displayName || "User"}
                  </p>
                  <p className="text-center  font-medium ">
                    {user?.email || "User"}
                  </p>
                  <button
                    className="btn btn-sm mt-2 w-full bg-secondary text-white"
                  >
                    Dashboard
                  </button>
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