import React from 'react';
import { Link, useNavigate } from 'react-router';

const ErrorPage = () => {
      const navigate = useNavigate();
    return (
        <div>
    <div className="py-15 w-[95%] mx-auto">
      <div className="flex  items-center justify-center">
        <img
          className="h-[350px] w-[320px] "
          src=" https://i.ibb.co.com/KcWXXcrV/error-404.png"
          alt=""
        />
      </div>
      <h1 className="font-bold text-2xl text-center mt-5">
        Oops, page not found!
      </h1>
      <p className="text-base text-center mb-5">
        The page you are looking for is not available.
      </p>
      <div className=" bg-gradient-to-r from-[#FF5A3C] to-[#FF5A3C]/80 flex justify-center px-6 py-3 text-amber-50 rounded-md w-[150px] mx-auto">
        <Link onClick={() => navigate(-1)} to="./">
          Go Back!
        </Link>
      </div>
    </div>
        </div>
    );
};

export default ErrorPage;