import React from "react";
import { Link } from "react-router";
import img from '../../image/cancel.png'
const PaymentCancel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-4">
        <img
          src={img}
          alt="Cancel"
          className="mx-auto w-50 md:w-65 lg:w-80 object-contain"
        />

        <h2 className="text-2xl md:text-3xl font-bold text-secondary">
          Payment Cancel
        </h2>

        <Link to="/all-scholarship">
          <button className="btn btn-primary text-secondary">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentCancel;
