import React, { useState } from "react";
import useAxios from "../../Hooks/UseAxios/UseAxios";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Component/Loading/Loading";
import { FaChevronDown, FaChevronUp, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const AllScholarship = () => {
  const useaxios = useAxios();
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const [icon, seticon] = useState(false);
  const { data: scholars = [], isLoading } = useQuery({
    queryKey: ["scholars", category],
    queryFn: async () => {
      const query = category ? `?category=${category}` : "";
      const res = await useaxios.get(`/scholarships/all${query}`);
      return res.data;
    },
  });
  const filteredScholars = scholars.filter((scholar) =>
    scholar.ScholarshipName?.toLowerCase().includes(searchText.toLowerCase())
  );
  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="container mx-auto px-4 py-15">
        <div className="text-center pb-8">
          <h1 className="text-secondary text-4xl font-bold mb-2">
            All Properties
          </h1>
          <p className="text-base font-semibold text-black/60">
            Find Your Scholarship
          </p>
        </div>
        {/* search scholars  */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-y-4">
          <div className="join ">
            <div>
              <label className="input validator  join-item focus-within:outline-none border-0 focus-within:ring-0">
                <input
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="search here"
                  type="text"
                />
              </label>
            </div>
            <button
              onClick={(e) => setSearchText(e.target.value)}
              className="btn btn-neutral bg-secondary  join-item"
            >
              Search
            </button>
          </div>
          <div>
            <div
              onClick={() => seticon(!icon)}
              className="dropdown dropdown-end "
            >
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 text-white bg-[#1A2A80] py-5 px-3"
              >
                Filter by Scholarship Degree
                {icon === true ? (
                  <span className="ml-0.5">
                    <FaChevronUp />
                  </span>
                ) : (
                  <span className="ml-0.5">
                    <FaChevronDown />
                  </span>
                )}
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu text-white bg-[#B2B0E8] rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li
                  onClick={() => setCategory("Master")}
                  className="bg-[#7A85C1] rounded-sm mt-0.5"
                >
                  <a>Master</a>
                </li>
                <li
                  onClick={() => setCategory("Bachelor")}
                  className="bg-[#7A85C1] rounded-sm mt-0.5"
                >
                  <a>Bachelor</a>
                </li>
                <li
                  onClick={() => setCategory("Diploma")}
                  className="bg-[#7A85C1] rounded-sm mt-0.5"
                >
                  <a>Diploma</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-[95%]  mx-auto mt-10">
          {filteredScholars.map((scholar) => (
            <div
              key={scholar._id}
              className="bg-white rounded-xl shadow-lg  hover:shadow-2xl transition-all duration-800 relative cursor-pointer w-full  min-h-[470px]"
            >
              <div className="relative h-60 w-full overflow-hidden rounded-lg">
                <img
                  src={scholar.Image}
                  alt="SCHOLARSHIP"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 hover:opacity-80 transition-opacity duration-500"></div>
              </div>
              <div className="px-3 pt-5">
                {/*Scholarship Category*/}
                <div className="absolute top-3 left-3">
                  <button className="bg-primary text-white py-1 px-4 rounded-2xl text-sm font-semibold">
                    {scholar.ScholarshipCategory}
                  </button>
                </div>
                {/* Scholarship Name */}
                <h2 className="text-secondary text-[18px] lg:text-xl font-semibold ">
                  {scholar.ScholarshipName}
                </h2>
                {/* University Name Subject Category*/}
                <div className="flex justify-between items-center">
                  {/* University Name */}
                  <p className="text-base font-semibold text-secondary py-3">
                    {scholar.UniversityName}
                  </p>
                  {/* Subject Category */}
                  <p className="text-base font-semibold text-secondary py-3">
                    Subj: {scholar.SubjectCategory}
                  </p>
                </div>
                {/* location */}
                <div className="text-black/50 flex items-center justify-between">
                  <div className=" flex items-center gap-1 ">
                    <FaMapMarkerAlt size={20} className="text-sm font-bold " />
                    <p className="text-sm font-bold ">{scholar.Country}</p>
                  </div>
                  <p className="text-sm font-bold ">
                    Ranking : {scholar.WorldRank}
                  </p>
                </div>
                {/* price */}
                <div className="  flex justify-between pt-5 items-center">
                  <h2 className="text-2xl font-semibold text-primary">
                    ${scholar.ApplicationFees}
                  </h2>
                  <Link
                    to={`/scholarship-details/${scholar._id}`}
                    className="cursor-pointer text-primary/80 rounded-lg border font-semibold text-sm py-2 px-3 hover:bg-primary/90 hover:text-white transition duration-800"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllScholarship;
