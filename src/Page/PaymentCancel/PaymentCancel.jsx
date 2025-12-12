import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import img from '../../image/cancel.png'
import UseAxiosSecure from "../../Hooks/UseAxios/UseAxiosSecure";
const PaymentCancel = () => {
    const [searchParams] = useSearchParams();
    const [paymentInfo, setPaymentInfo] = useState({});
      // const [err, setErr] = useState({})
    const sectionId = searchParams.get("session_id");
    const axiosSecure = UseAxiosSecure();
    console.log(sectionId);
    useEffect(() => {
      if (sectionId) {
        axiosSecure
          .patch(`/payment-cancel?session_id=${sectionId}`)
          .then((res) => {
            setPaymentInfo({
              transactionId: res.data.transactionId,
              trackingId: res.data.trackingId,
              universityName: res.data.universityName,
              amount: res.data.amount,
              scholarshipName: res.data.scholarshipName,
            });
            
          });
      }
    }, [sectionId, axiosSecure]);
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-4">
        <h2 className="text-base text-secondary font-bold">
         UniversityName :    
          <span className="text-primary-content"> { paymentInfo.universityName }</span>
        </h2>
        <img
          src={img}
          alt="Cancel"
          className="mx-auto w-50 md:w-65 lg:w-80 object-contain"
        />

        <h2 className="text-2xl md:text-3xl font-bold text-secondary">
          Payment Cancel
        </h2>

        <Link to='/dashboard/my-application'>
          <button className="btn btn-primary text-white">Return to Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentCancel;
