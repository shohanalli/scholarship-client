import React from "react";
import { useForm } from "react-hook-form";
import useAxios from "../../Hooks/UseAxios/UseAxios";
import UseAxiosSecure from "../../Hooks/UseAxios/UseAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const AddScholarship = () => {
  const { register, handleSubmit , reset} = useForm();
  const { user } = useAuth();
  const axios = useAxios();
  const axiosSecure = UseAxiosSecure();
  const handelScholarFrom = (data) => {
    // get image and create link
    const scholarImage = data.image[0];
    const formData = new FormData();
    formData.append("image", scholarImage);
    const img_API_URL_LINK = `https://api.imgbb.com/1/upload?expiration=600&key=${
      import.meta.env.VITE_imageurl
    }`;
    axios
      .post(img_API_URL_LINK, formData)
      .then((res) => {
        const linkPhoto = res.data.data.url;
        const allScholarData = {
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
          Deadline: data.applicationDeadline,
          PostDate: new Date().toDateString(),
          UserEmail: user.email,
        };
        console.log(allScholarData)
        axiosSecure.post("/scholarships", allScholarData).then((res) => {
          Swal.fire({
            icon: "success",
            title: "Scholar has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(res.data)
          reset();
        });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

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
                <label className="text-base font-medium text-secondary">
                  Scholarship Name
                </label>
                <input
                  type="text"
                  className="input w-full  outline-none focus:outline-primary"
                  {...register("scholarshipName", { required: true })}
                  placeholder="Scholarship Name"
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
                  {...register("universityName", { required: true })}
                  placeholder="University Name"
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
                  {...register("universityWorldRank", { required: true })}
                  placeholder="university World Rank"
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
                  {...register("tuitionFees", { required: true })}
                  placeholder="tuitionFees $"
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
                  {...register("applicationFees", { required: true })}
                  placeholder="applicationFees $"
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
                  {...register("serviceCharge", { required: true })}
                  placeholder="serviceCharge $"
                />
              </fieldset>
              {/* Coverage Details */}
              <fieldset className="fieldset flex-1">
                <label className="text-base font-medium text-secondary">
                  ScholarshipDescription
                </label>
                <textarea
                  className="textarea textarea-bordered w-full h-17"
                  placeholder="Write Scholarship Description..."
                  {...register("scholarshipDescription", { required: true })}
                ></textarea>
              </fieldset>
              {/* Coverage Details */}
              <fieldset className="fieldset flex-1">
                <label className="text-base font-medium text-secondary">
                  Coverage Details
                </label>
                <textarea
                  className="textarea textarea-bordered w-full h-10"
                  placeholder="Write your Coverage Details..."
                  {...register("coverageDetails", { required: true })}
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
                  placeholder="chose photo"
                  {...register("image", { required: true })}
                />
              </fieldset>
              {/* country */}
              <fieldset className="fieldset">
                <label className="label text-base text-secondary mt-3">
                  Sender Region
                </label>
                <select
                  defaultValue="Pick a Region"
                  {...register("universityCountry", { required: true })}
                  className="select"
                >
                  <option>Select A Country</option>
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
                  defaultValue="Pick a Region"
                  {...register("universityCity", { required: true })}
                  className="select"
                >
                  <option>Select A city</option>
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
                  defaultValue="Pick a Region"
                  {...register("subjectCategory", { required: true })}
                  className="select"
                >
                  <option>Select subject Category</option>
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
                  defaultValue="Pick a Region"
                  {...register("scholarshipCategory", { required: true })}
                  className="select"
                >
                  <option>Scholarship Category</option>
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
                  defaultValue="Pick a Region"
                  {...register("degree", { required: true })}
                  className="select"
                >
                  <option>degree</option>
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
                  {...register("applicationDeadline", { required: true })}
                  placeholder="serviceCharge $"
                />
              </fieldset>
            <button
              className="block w-[90%] mt-5 cursor-pointer py-4 text-center text-base font-semibold text-white bg-primary/90"
            >
              Add Scholarship
            </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddScholarship;
