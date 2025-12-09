import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import UseAxiosSecure from '../../../Hooks/UseAxios/UseAxiosSecure';
import img from '../../../image/success.png'
const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const sectionId = searchParams.get('session_id')
    const axiosSecure = UseAxiosSecure()
    console.log(sectionId)
    useEffect(()=>{
        if(sectionId){
            axiosSecure.patch(`/payment-success?session_id=${sectionId}`)
            .then(res=>{

                console.log(res.data)
            })
        }
    },[sectionId, axiosSecure])

    return (
        <div>
                <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-4">
        <img
          src={img}
          alt="Cancel"
          className="mx-auto w-50 md:w-65 lg:w-80 object-contain"
        />

        <h2 className="text-2xl md:text-3xl font-bold text-secondary">
          Payment Successful
        </h2>
                    <h2 className="text-xl text-secondary font-bold">trackingId == <span className='text-blue-500'>{paymentInfo.trackingId}</span></h2>
            <h2 className="text-xl text-secondary font-bold">transactionId == <span className='text-blue-500'>{paymentInfo.transactionId}</span></h2>
      </div>
    </div>
        </div>
    );
};

export default PaymentSuccess;