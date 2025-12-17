import React from "react";

import UseAxiosSecure from "../../Hooks/UseAxios/UseAxiosSecure";
import Loading from "../../Component/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { Link,    useParams } from "react-router";
import UseRole from "../../Hooks/Userole/UseRole";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import Review from "../Review/Review";
import DetailsRegister from "../../Component/DetailsRegister/DetailsRegister";

const ScholarshipDetails = () => {
  const useAxiosSecure = UseAxiosSecure();
  const { user } = useAuth();
  const { role, roleLoading } = UseRole();
  const { id } = useParams();
  const { data: scholars = [], isLoading } = useQuery({
    queryKey: ["scholars", id],
    queryFn: async () => {
      const res = await useAxiosSecure.get(`/scholarships/${id}`);
      return res.data;
    },
  });
  // send application data in server **********
const handleApplyAndPay = async () => {

// Application Save
  const applicationData = {
    applicationDate: new Date(),
    serviceCharge: scholars.ServiceCharge,
    paymentStatus: "unpaid",
    status: 'pending',
    applicationFees: scholars.ApplicationFees,
    degree: scholars.Degree,
    scholarshipCategory: scholars.ScholarshipCategory,
    scholarshipName: scholars.ScholarshipName,
    universityName: scholars.UniversityName,
    userEmail: user?.email,
    userName: user?.displayName,
    scholarshipId: scholars._id,
    universityAddress: scholars.City,
    subjectCategory: scholars.SubjectCategory,
    scholarImages: scholars.Image

  };

 const applicationRes = await useAxiosSecure.post("/applications", applicationData);
const applicationId = applicationRes.data.insertedId;

// Payment Checkout Session Create
  const paymentInfo = {
    userEmail: user?.email,
    applicationId: applicationId,
    scholarshipId: scholars._id,
    scholarshipName: scholars.ScholarshipName,
    applicationFees: scholars.ApplicationFees,
    universityName: scholars.UniversityName,
    status: applicationData.status
  };
  const res = await useAxiosSecure.post('/create-checkout-section', paymentInfo);
  console.log(res.data)
  window.location.assign(res.data.url);
};

  const {
    ScholarshipName,
    UniversityName,
    Image,
    Country,
    City,
    WorldRank,
    SubjectCategory,
    ScholarshipCategory,
    Degree,
    TuitionFees,
    ApplicationFees,
    ServiceCharge,
    Deadline,
    PostDate,
    UserEmail,
    ScholarshipDescription,
    CoverageDetails,
  } = scholars;
  const postdate = new Date(PostDate).toLocaleDateString();
  const dadline = new Date(Deadline).toLocaleDateString();
  if (isLoading || roleLoading) return <Loading />;

  return (
    <>
    <div className="py-15 w-11/12  mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <aside className="col-span-2">
          <div className="pt-8 w-10/12 mx-auto md:w-9/12">
            <h1 className="text-secondary text-2xl md:text-3xl py-5 font-bold ">
              {ScholarshipName}
            </h1>
            <img
              className="w-full h-auto object-cover rounded-lg"
              src={Image}
              alt="Property"
            />
            <p className="text-xl text-secondary font-bold my-5">
              <span className="text-primary">Coverage : </span>
              {CoverageDetails}
            </p>
            <p className="text-base text-secondary/70 font-bold mt-5">
              {ScholarshipDescription}
            </p>
          </div>
        </aside>
        <aside className="bg-secondary/5 col-span-1 mt-8 p-5 md:p-2 rounded-sm max-h-[530px] sticky top-10 ">
          <h2 className="text-xl text-secondary py-3 font-bold">View All</h2>
          <ul className="space-y-2">
            <li className="flex gap-2 text-black/80 font-base">
              UniversityName : {UniversityName}
            </li>
            <li className="flex gap-2 text-black/80 font-base">
              Country : {Country}
            </li>
            <li className="flex gap-2 text-black/80 font-base">
              City : {City}
            </li>
            <li className="flex gap-2 text-black/80 font-base">
              WorldRank : {WorldRank}
            </li>
            <li className="flex gap-2 text-black/80 font-base">
              SubjCategory : {SubjectCategory}
            </li>
            <li className="flex gap-2 text-black/80 font-base">
              ScholarCategory : {ScholarshipCategory}
            </li>
            <li className="flex gap-2 text-black/80 font-base">
              Degree : {Degree}
            </li>

            <li className="flex gap-2 text-black/80 font-base">
              PostDate : {postdate}
            </li>
            <li className="flex gap-2 text-black/80 font-base">
              Deadline : {dadline}
            </li>
            <li className="flex gap-2 text-black/80 font-base">
              TuitionFees : {TuitionFees}
            </li>
            <li className="flex gap-2 text-black/80 font-base">
              ApplicationFees : {ApplicationFees}
            </li>
            <li className="flex gap-2 text-black/80 font-base">
              ServiceCharge : {ServiceCharge}
            </li>
          </ul>
          {role === "student" ? (
           <div className="w-full text-center mt-5">
            <button
              onClick={handleApplyAndPay}
              className="block w-full cursor-pointer py-4 h-full text-center text-base font-semibold text-white bg-primary/90"
            >
              Apply for Scholarship
            </button>
           </div>

          
          ) : (
            <button className="w-full cursor-not-allowed text-base font-semibold text-white py-3 my-4 bg-black/50">
              Apply for Scholarship
            </button>
          )}
        </aside>
      </div>
      <Review />
    
    </div>
      <DetailsRegister />
      </>
  );
};

export default ScholarshipDetails;
