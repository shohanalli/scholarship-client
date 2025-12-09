import React from 'react';
import Loading from '../../Component/Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecure from '../../Hooks/UseAxios/UseAxiosSecure';
import { useParams } from 'react-router';
import bgImg from '../../image/bg1.png';
import bgImg2 from '../../image/bg-2.png';
import useAuth from '../../Hooks/useAuth';

const Payment = () => {
        const {scholarId} = useParams();
        const {user} = useAuth()
        console.log(scholarId)
    const axiosSecure = UseAxiosSecure()
    const {  data: scholar = {}, isLoading} = useQuery({
        queryKey: ['scholar', scholarId],
        queryFn: async () =>{
           const res = await axiosSecure.get(`/scholarships/payment/${scholarId}`)
           console.log(res.data)
            return res.data
        }
    })

const handelPayment = async() =>{
    const paymentInfo = {
      userEmail: user.email,
      scholarshipId: scholar._id,
      scholarshipName: scholar.ScholarshipName,
      applicationFees: scholar.ApplicationFees,
      }
      const res = await axiosSecure.post('/create-checkout-section', paymentInfo)
      window.location.assign(res.data.url);
      console.log(res.data);
    }






    console.log(scholar)
    if (isLoading) return <Loading />;
    return (
<div  className="w-full  bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${bgImg})` }}
>
  <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    <div className="space-y-5">
      <h1 className="text-3xl md:text-5xl font-bold text-primary">
        Pay For : <span className='text-secondary'>{scholar.ScholarshipName} Scholarship</span>
      </h1>
      <button onClick={handelPayment} className="px-6 cursor-pointer py-3 bg-primary text-white  font-semibold rounded-md hover:bg-primary/80 transition">
        Pay Now
      </button>
    </div>
    <div className="w-full">
      <img
        src={`${bgImg2}`}
        alt="Scholarship Banner"
        className="w-full min-h-screen rounded-lg object-cover"
      />
    </div>
  </div>
</div>
    );
};

export default Payment;


