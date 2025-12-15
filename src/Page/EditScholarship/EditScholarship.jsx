import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAxios from "../../Hooks/UseAxios/UseAxios";
import UseAxiosSecure from "../../Hooks/UseAxios/UseAxiosSecure";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Component/Loading/Loading";

const EditScholarship = () => {
  const { register, handleSubmit, reset} = useForm();
  const {id} = useParams();
  const axios = useAxios();
  const navigate = useNavigate();
  const axiosSecure = UseAxiosSecure();

//get scholarship 
  const { data: scholars = [], isLoading } = useQuery({
    queryKey: ["scholars", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/scholarships/${id}`);
      return res.data;
    },
  });
  useEffect(() => {
  if (scholars) {
    reset({
      scholarshipName: scholars.ScholarshipName,
      universityName: scholars.UniversityName,
      universityCountry: scholars.Country,
      universityCity: scholars.City,
      subjectCategory: scholars.SubjectCategory,
      scholarshipCategory: scholars.ScholarshipCategory,
      degree: scholars.Degree,
      applicationDeadline: scholars.Deadline,
      tuitionFees: scholars.TuitionFees,
      applicationFees: scholars.ApplicationFees,
      serviceCharge: scholars.ServiceCharge,
    });
  }
}, [scholars, reset]);

  const handelScholarFrom = async(data) => {
    // get image and create link
    let linkPhoto = scholars.Image;
      if (data.image && data.image.length > 0) {

    const formData = new FormData();
    formData.append("image", data.image[0]);
    const img_API_URL_LINK = `https://api.imgbb.com/1/upload?expiration=600&key=${
      import.meta.env.VITE_imageurl
    }`;
    const res = await axios.post(img_API_URL_LINK, formData);
    linkPhoto = res.data.data.url;
      }

        const updateScholarData = {
          ScholarshipName: data.scholarshipName,
          UniversityName: data.universityName,
          WorldRank: data.universityWorldRank,
          TuitionFees: data.tuitionFees,
          ApplicationFees: data.applicationFees,
          ServiceCharge: data.serviceCharge,
          ScholarshipDescription: data.scholarshipDescription,
          CoverageDetails: data.coverageDetails,
          Image: linkPhoto,
          Country: data.universityCountry,
          City: data.universityCity,
          SubjectCategory: data.subjectCategory,
          ScholarshipCategory: data.scholarshipCategory,
          Degree: data.degree,
          Deadline: data.applicationDeadline
        };
        console.log(updateScholarData)
        axiosSecure.patch(`/scholarships/${scholars._id}`, updateScholarData)
        .then((res) => {
          const result = res.data
          if (result.modifiedCount && result.modifiedCount === 1) {
          Swal.fire({
            icon: "success",
            title: "Scholar has been updated",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
          navigate('/dashboard/manage-scholarships');
          });
          }else{
         Swal.fire({
        icon: "info",
        title: "No changes were made",
        showConfirmButton: true,
      });
          }

        })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  
  {isLoading && <Loading />}

  return (
    <>
      <div className="py-10 w-10/12  mx-auto">
        <h2 className="text-2xl text-secondary font-bold">Add a Scholar</h2>
        <p className="text-base/6 font-medium text-secondary/600 py-3">
          This information will be displayed publicly so be careful
        </p>
        <form onSubmit={handleSubmit(handelScholarFrom)}>
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 md:mr-10">
              {/* scholarshipName */}
              <fieldset className="fieldset flex-1">
                <label  className="text-base font-medium text-secondary">
                  Scholarship Name
                </label>
                <input
                  type="text"
                  className="input w-full  outline-none focus:outline-primary"
                  defaultValue={scholars.ScholarshipName}
                  {...register("scholarshipName" )}
                  
                />
              </fieldset>
              {/* University Name */}
              <fieldset className="fieldset flex-1">
                <label className="text-base font-medium text-secondary">
                  University Name
                </label>
                <input
                  type="text"
                  className="input w-full  outline-none focus:outline-primary"
                  defaultValue={scholars.UniversityName}
                  {...register("universityName" )}
                  
                />
              </fieldset>
              {/* WorldRank */}
              <fieldset className="fieldset">
                <label className="label text-base text-secondary mt-3">
                  university World Rank
                </label>
                <input
                  type="number"
                  className="input w-full"
                  defaultValue={scholars.WorldRank}
                  {...register("universityWorldRank")}
                  
                />
              </fieldset>
              {/* WorldRank */}
              <fieldset className="fieldset">
                <label className="label text-base text-secondary mt-3">
                  Tuition Fees
                </label>
                <input
                  type="number"
                  className="input w-full"
                  defaultValue={scholars.TuitionFees}
                  {...register("tuitionFees" )}
                  
                />
              </fieldset>
              {/* WorldRank */}
              <fieldset className="fieldset">
                <label className="label text-base text-secondary mt-3">
                  Application Fees
                </label>
                <input
                  type="number"
                  className="input w-full"
                  defaultValue={scholars.ApplicationFees}
                  {...register("applicationFees")}
                  
                />
              </fieldset>
              {/* WorldRank */}
              <fieldset className="fieldset">
                <label className="label text-base text-secondary mt-3">
                  Service Charge
                </label>
                <input
                  type="number"
                  className="input w-full"
                  defaultValue={scholars.ServiceCharge}
                  {...register("serviceCharge")}
                  
                />
              </fieldset>
              {/* Coverage Details */}
              <fieldset className="fieldset flex-1">
                <label className="text-base font-medium text-secondary">
                  ScholarshipDescription
                </label>
                <textarea
                  className="textarea textarea-bordered w-full h-17"
                  defaultValue={scholars.ScholarshipDescription}
                  
                  {...register("scholarshipDescription")}
                ></textarea>
              </fieldset>
              {/* Coverage Details */}
              <fieldset className="fieldset flex-1">
                <label className="text-base font-medium text-secondary">
                  Coverage Details
                </label>
                <textarea
                  className="textarea textarea-bordered w-full h-10"
                  defaultValue={scholars.CoverageDetails}
                  
                  {...register("coverageDetails")}
                ></textarea>
              </fieldset>
            </div>
            <div className="flex-1">
              {/* Image */}
              <fieldset className="fieldset flex-1">
                <label className="text-base font-medium text-secondary">
                  Chose Image
                </label>
                <input
                  type="file"
                  className="file-input"                  
                  {...register("image")}
                />
              </fieldset>
              {/* country */}
              <fieldset className="fieldset">
                <label className="label text-base text-secondary mt-3">
                  Sender Region
                </label>
                <select
                  defaultValue={scholars.Country}
                  {...register("universityCountry")}
                  className="select"
                >
                  <option>{scholars.Country}</option>
                  <option>Lebanon</option>
                  <option>Brazil</option>
                  <option>Switzerland</option>
                  <option>Australia</option>
                  <option>Japan</option>
                  <option>UK</option>
                  <option>USA</option>
                </select>
              </fieldset>
              {/* universityCity */}
              <fieldset className="fieldset">
                <label className="label text-base text-secondary mt-3">
                  University City
                </label>
                <select
                  defaultValue={scholars.City}
                  {...register("universityCity")}
                  className="select"
                >
                  <option>{scholars.City}</option>
                  <option>Cambridge</option>
                  <option>Oxford</option>
                  <option>Tokyo</option>
                  <option>Melbourne</option>
                  <option>Zurich</option>
                  <option>Cape Town</option>
                  <option>São Paulo</option>
                  <option>Beirut</option>
                </select>
              </fieldset>
              {/* subjectCategory */}
              <fieldset className="fieldset">
                <label className="label text-base text-secondary mt-3">
                  Subject Category
                </label>
                <select
                  defaultValue={scholars.SubjectCategory}
                  {...register("subjectCategory" )}
                  className="select"
                >
                  <option>{scholars.SubjectCategory}</option>
                  <option>Engineering</option>
                  <option>Arts & Humanities</option>
                  <option>Medicine</option>
                  <option>Technology</option>
                  <option>Business</option>
                  <option>Masters</option>
                  <option>Bachelor</option>
                  <option>Diploma</option>
                </select>
              </fieldset>
              {/* scholarship Category*/}
              <fieldset className="fieldset">
                <label className="label text-base text-secondary mt-3">
                  scholarship Category
                </label>
                <select
                  defaultValue={scholars.ScholarshipCategory}
                  {...register("scholarshipCategory")}
                  className="select"
                >
                  <option>{scholars.ScholarshipCategory}</option>
                  <option>Self-fund</option>
                  <option>Partial</option>
                  <option>Full fund</option>
                </select>
              </fieldset>
              {/* degree*/}
              <fieldset className="fieldset">
                <label className="label text-base text-secondary mt-3">
                  Degree
                </label>
                <select
                  defaultValue={scholars.Degree}
                  {...register("degree")}
                  className="select"
                >
                  <option>{scholars.Degree}</option>
                  <option>Masters</option>
                  <option>Bachelor</option>
                  <option>Diploma</option>
                </select>
              </fieldset>
              {/* Application Deadline */}
              <fieldset className="fieldset md:w-6/12">
                <label className="label text-base text-secondary mt-3 ">
                  Application Deadline
                </label>
                <input
                  type="date"
                  className="input w-full"
                  defaultValue={scholars.Deadline}
                  {...register("applicationDeadline")}
                  
                />
              </fieldset>
            <button
              className="block w-[90%] mt-5 cursor-pointer py-4 text-center text-base font-semibold text-white bg-primary/90"
            >
              Update This Scholarship
            </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditScholarship;
