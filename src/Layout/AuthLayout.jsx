import React from 'react';
import { Outlet } from 'react-router';
import Logo from '../Component/logo/Logo';

const AuthLayout = () => {
    return (
    <>
       <div className=" bg-base-100 shadow-sm py-2">
      <div className="navbar w-[97%] lg:w-[95%] mx-auto">
            <div>
                {<Logo />}
            </div>
      </div>
    </div>
    <Outlet />
    </>
    );
};

export default AuthLayout;