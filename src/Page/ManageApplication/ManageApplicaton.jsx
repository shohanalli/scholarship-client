import React, { useRef, useState } from "react";
import UseAxiosSecure from "../../Hooks/UseAxios/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { FaMapMarkerAlt } from "react-icons/fa";
import Loading from "../../Component/Loading/Loading";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ManageApplication = () => {
  const axiosSecure = UseAxiosSecure();
  const [modalApplication, setModalApplication] = useState({});
  const [modalScholar, setModalScholar] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const detailsModalRef = useRef(null);
  const fedbackModalRef = useRef(null);

  const { data: applications = [], refetch } = useQuery({
    queryKey: ["application"],
    queryFn: async () => {
      const res = await axiosSecure.get("/applications");
      return res.data;
    },
  });
  // application details api for modal
  const handleDetailsModal = async (applicationId) => {
    const appRes = await axiosSecure.get(`/applications/${applicationId}/xyz`);
    setModalApplication(appRes.data);

    const schRes = await axiosSecure.get(
      `/scholarships/${appRes.data.scholarshipId}/xyz`
    );
    setModalScholar(schRes.data);
    detailsModalRef.current.showModal();
  };
  ///handelFeedbackModal
  const handelFeedbackModal = (application) => {
    setModalApplication(application);
    fedbackModalRef.current.showModal();
  };
  const handelFeedbackFrom = async (data) => {
    try {
      const updateReview = {
        feedback: data.feedbackText,
      };

      await axiosSecure.patch(
        `/applications/${modalApplication._id}`,
        updateReview
      );

      Swal.fire({
        title: "Success!",
        text: "Your feedback has been Saved",
        icon: "success",
      });
      fedbackModalRef.current.close();
      reset();
      setModalApplication(null);
      refetch();
    } catch (err) {
      console.log(err);
    }
  };
  const handelProcess = async (id) =>{
          const updateStatus = {
        status: "processing",
      };
    const res = await axiosSecure.patch(`/applications/${id}`, updateStatus);
          if (res.data.modifiedCount) {
            Swal.fire({
              title: "Updated!",
              text: "Your User been Updated.",
              icon: "success",
            });
            refetch();
          }
  }
  const handelCompleted = async (id) =>{
          const updateStatus = {
        status: "completed",
      };
    const res = await axiosSecure.patch(`/applications/${id}`, updateStatus);
          if (res.data.modifiedCount) {
            Swal.fire({
              title: "Updated!",
              text: "Your User been Updated.",
              icon: "success",
            });
            refetch();
          }
  };
  

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Applicant Name</th>
              <th>Applicant Email</th>
              <th>University Name</th>
              <th>Payment Status</th>
              <th>Application Status</th>
              <th>Feedback</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <tr
                className={`${
                  index % 2 === 0 ? "bg-[#FFE6D4]" : "bg-[#FFF2EF]"
                }`}
                key={application._id}
              >
                <th>{index + 1}</th>
                <td>{application.userName}</td>
                <td>{application.userEmail}</td>
                <td>{application.universityName}</td>
                <td>
                  <span
                    className={`px-3 py-2.5 rounded text-white  ${
                      application.paymentStatus === "paid"
                        ? "bg-[#386641]"
                        : "bg-[#CF0F0F]"
                    }`}
                  >
                    {application.paymentStatus}
                  </span>
                </td>

                <td>{application.status}</td>
                <td>{application.feedback}</td>
                <td className="grid grid-cols-1 lg:grid-cols-2 gap-2 place-items-center">
                  <button
                    onClick={() => handleDetailsModal(application._id)}
                    className="btn w-full h-10 btn-sm px-10 lg:px-0 bg-[#132440] text-white"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => handelFeedbackModal(application)}
                    className="btn w-full h-10 btn-sm  px-10 lg:px-0 bg-[#7B542F] text-white"
                  >
                    Feedback
                  </button>
                  <div className="dropdown dropdown-end">
                    <button
                      tabIndex={0}
                      role="button"
                      className="btn w-full h-10 btn-sm px-5 lg:px-5  bg-[#5B532C] text-white"
                    >
                      Status Update
                    </button>
                    <ul
                      tabIndex="-1"
                      className="dropdown-content menu text-[#132440] font-bold bg-[#90AB8B] rounded-box z-1 w-52 p-2 shadow-sm"
                    >
                      {
                        application.status === "pending" && 
                        <>
                         <li onClick={()=>handelProcess(application._id)}>
                        <a>Processing</a>
                      </li>
                      <li onClick={()=>handelCompleted(application._id)}>
                        <a>Completed</a>
                      </li>
                        </>
                      }
                      {
                        application.status === "processing" && 
                        <>
                        <li
                        onClick={()=>handelProcess(application._id)}
                        className="cursor-not-allowed disabled">
                        <a>Processing</a>
                      </li>
                      <li onClick={()=>handelCompleted(application._id)}>
                        <a>Completed</a>
                      </li>
                        </>
                      }
                      {
                        application.status === "completed" && 
                        <>
                        <li
                        onClick={()=>handelProcess(application._id)}
                         className="cursor-not-allowed disabled">
                        <a>Processing</a>
                      </li>
                      <li 
                      onClick={()=>handelCompleted(application._id)}
                      className="cursor-not-allowed disabled">
                        <a>Completed</a>
                      </li>
                        </>
                      }

                    </ul>
                  </div>
                  <button className="btn w-full h-10 btn-sm px-10 lg:px-0 bg-[#c70000] text-white">
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* modal for application details */}
      <dialog ref={detailsModalRef} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* modal content is here  */}
          <div className="w-[95%]  mx-auto">
            <div className="relative h-60 w-full overflow-hidden rounded-lg">
              <img
                src={modalApplication?.scholarImages}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/80 opacity-0 hover:opacity-80 transition-opacity duration-500"></div>
            </div>
            <div className="px-3 pt-5">
              {/*Scholarship Category*/}
              <div className="absolute top-6 left-9">
                <button className="bg-primary text-white py-1 px-4 rounded-2xl text-sm font-semibold">
                  {modalApplication?.scholarshipCategory}
                </button>
              </div>
              {/* Scholarship Name */}
              <h2 className="text-secondary text-[18px] lg:text-xl font-semibold ">
                SName: {modalApplication?.scholarshipName}
              </h2>
              {/* University Name Subject Category*/}
              <div className="flex justify-between items-center">
                {/* University Name */}
                <p className="text-base font-semibold text-secondary py-2">
                  UN : {modalApplication?.universityName}
                </p>
                {/* Subject Category */}
                <p className="text-base font-semibold text-secondary py-3">
                  Subj: {modalApplication?.subjectCategory}
                </p>
              </div>
              {/* location */}
              <div className="text-black/50 py-1.5 flex items-center justify-between">
                <div className=" flex items-center gap-1 ">
                  <FaMapMarkerAlt size={20} className="text-sm font-bold " />
                  <p className="text-sm font-bold ">
                    {modalApplication?.universityAddress}
                  </p>
                </div>
                <p className="text-sm font-bold ">
                  Degree: {modalApplication?.degree}
                </p>
              </div>
              <div className="text-black/50 py-1.5 flex items-center justify-between">
                <div className=" flex items-center gap-1 ">
                  <HiMiniCalendarDateRange
                    size={20}
                    className="text-sm font-bold "
                  />
                  <p className="text-sm font-bold ">
                    {modalApplication?.applicationDate
                      ? new Date(
                          modalApplication?.applicationDate
                        ).toLocaleDateString()
                      : "N/A"}
                  </p>
                </div>
                <p className="text-sm font-bold ">
                  TrackID: {modalApplication?.trackingId}
                </p>
              </div>
              <div className="text-black/50 py-1.5 flex items-center justify-between">
                <div className=" flex items-center gap-1 ">
                  <p className="text-sm font-bold ">
                    PaymentStatus : {modalApplication?.paymentStatus}
                  </p>
                </div>
                <p className="text-sm font-bold ">
                  Status: {modalApplication?.status}
                </p>
              </div>
              {/* price */}
              <div className="  flex justify-between pt-5 items-center">
                <h2 className="text-xl font-semibold text-primary">
                  Fees : ${modalApplication?.applicationFees}
                </h2>
              </div>
            </div>
          </div>
          {/* Scholar ########## details  */}
          <h2 className="text-secondary text-center py-6 text-[18px] lg:text-xl font-semibold ">
            Scholarship Details
          </h2>
          <div className="relative h-60 w-full overflow-hidden rounded-lg">
            <img
              src={modalScholar?.Image}
              alt={modalScholar?.ScholarshipName}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/80 opacity-0 hover:opacity-80 transition-opacity duration-500"></div>
          </div>
          <div className="w-[95%]  mx-auto">
            <div className="px-3 pt-5">
              {/* Scholarship Name */}
              <h2 className="text-secondary text-[18px] lg:text-xl font-semibold ">
                SName: {modalScholar?.ScholarshipName}
              </h2>
              {/*Scholarship Category*/}
              <h2 className="text-secondary text-[16px] lg:text-[18px] font-semibold ">
                Category: {modalScholar?.ScholarshipCategory}
              </h2>
              {/* University Name Subject Category*/}
              <div className="flex justify-between items-center">
                {/* University Name */}
                <p className="text-base font-semibold text-secondary py-2">
                  UN : {modalScholar?.UniversityName}
                </p>
                {/* Subject Category */}
                <p className="text-base font-semibold text-secondary py-3">
                  Subj: {modalScholar?.SubjectCategory}
                </p>
              </div>
              {/* location */}
              <div className="text-black/50 py-1.5 flex items-center justify-between">
                <div className=" flex items-center gap-1 ">
                  <FaMapMarkerAlt size={20} className="text-sm font-bold " />
                  <p className="text-sm font-bold ">{modalScholar?.Country}</p>
                </div>
                <p className="text-sm font-bold ">
                  Degree: {modalScholar?.Degree}
                </p>
              </div>
              <div className="text-black/50 py-1.5 flex items-center justify-between">
                <div className=" flex items-center gap-1 ">
                  <HiMiniCalendarDateRange
                    size={20}
                    className="text-sm font-bold "
                  />
                  <p className="text-sm font-bold ">
                    {modalScholar?.PostDate
                      ? new Date(modalScholar?.PostDate).toLocaleDateString()
                      : "N/A"}
                  </p>
                </div>
                <p className="text-sm font-bold ">City: {modalScholar?.City}</p>
              </div>
              <div className="text-black/50 py-1.5 flex items-center justify-between">
                <div className=" flex items-center gap-1 ">
                  <p className="text-sm font-bold ">
                    ServiceCharge :$ {modalScholar?.ServiceCharge}
                  </p>
                </div>
                <p className="text-sm font-bold ">
                  WorldRank: {modalScholar?.WorldRank}
                </p>
              </div>
              {/* price */}
              <div className="  flex justify-between pt-5 items-center">
                <h2 className="text-xl font-semibold text-primary">
                  Fees : ${modalScholar?.ApplicationFees}
                </h2>
              </div>
              <div className=" pt-5 items-center">
                <h2 className="text-sm font-bold text-secondary">
                  <span className="text-primary">CoverageDetails :</span>{" "}
                  {modalScholar.CoverageDetails}
                </h2>
              </div>
              <div className=" pt-5 items-center">
                <h2 className="text-sm font-bold text-secondary">
                  <span className="text-primary">ScholarshipDescription :</span>{" "}
                  {modalScholar?.ScholarshipDescription}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </dialog>
      {/* modal for feedBack */}
      <dialog
        ref={fedbackModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box text-center p-3">
          <h3 className="font-bold text-2xl text-center">
            Feedback For Application
          </h3>
          <form method="dialog">
            <button className="btn btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form onSubmit={handleSubmit(handelFeedbackFrom)} className="py-5">
            <div className="py-3">
              {/* get review text value */}
              <textarea
                className="textarea w-full md:w-[80%] textarea-secondary outline-none  "
                rows="4"
                defaultValue={modalApplication?.feedback || ""}
                required
                {...register("feedbackText", { required: true })}
              ></textarea>
            </div>
            <button className="btn bg-secondary text-white">
              Send FeedBack
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ManageApplication;
