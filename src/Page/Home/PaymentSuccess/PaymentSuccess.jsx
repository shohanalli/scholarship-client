import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import UseAxiosSecure from "../../../Hooks/UseAxios/UseAxiosSecure";
import img from "../../../image/success.png";
const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate()
  const [paymentInfo, setPaymentInfo] = useState({});
  const sectionId = searchParams.get("session_id");
  const axiosSecure = UseAxiosSecure();
  console.log(sectionId);
  useEffect(() => {
    if (sectionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sectionId}`)
        .then((res) => {
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
            universityName: res.data.universityName,
            amount: res.data.amount,
            scholarshipName: res.data.scholarshipName,
          });
          console.log(res.data);
        });
    }
  }, [sectionId, axiosSecure]);

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center px-4">

        <div className="text-center space-y-4">
        <h2 className="text-base text-secondary font-bold">
         UniversityName :  
          <span className="text-primary-content">{paymentInfo.universityName}</span>
        </h2>
        <h2 className="text-base text-secondary font-bold">
          ScholarshipName : 
          <span className="text-primary-content">
            {paymentInfo.scholarshipName}
          </span>
        </h2>
        <h2 className="text-base text-secondary font-bold">
          Payment Amount : $ 
          <span className="text-primary-content">
            {paymentInfo.amount}
          </span>
        </h2>
          <img
            src={img}
            alt="Cancel"
            className="mx-auto w-50 md:w-65 lg:w-80 object-contain"
          />

          <h2 className="text-2xl md:text-3xl font-bold text-secondary">
            Payment Successful
          </h2>
      <button onClick={()=>navigate('/dashboard')} className="px-6 cursor-pointer py-3 bg-primary text-white  font-semibold rounded-md hover:bg-primary/80 transition">
        Go to Dashboard
      </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
