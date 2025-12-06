import React from 'react';
import { IoSchoolOutline } from 'react-icons/io5';
const Logo = () => {
    return (
        <div className="flex gap-2 items-center justify-center ">
            <a href="./" className="hidden md:block">
              <IoSchoolOutline size={50} color="#F94C10"/>
            </a>
            <a
              href="./"
              className="text-3xl font-extrabold text-secondary"
            >
              {" "}
              Scholar
            </a>
          </div>
    );
};

export default Logo;