import React from 'react';
import { CiMapPin } from 'react-icons/ci';
import {  Link } from 'react-router';
import { FaMapMarkerAlt } from "react-icons/fa";
import useAxios from '../../Hooks/UseAxios/UseAxios';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Loading/Loading';
const HomeCard = () => {
  const useaxios = useAxios()
  const {data: scholars = [], isLoading} = useQuery({
    queryKey: ['scholars'],
    queryFn: async () =>{
      const res = await useaxios.get('/scholarships');
      return res.data.slice(0,6)
    }
  })

  if(isLoading) return<Loading />
return (
    <div>
      <div className="container mx-auto px-4 py-15 ">
        <div className="text-center pb-8">
          <h1 className="text-secondary text-4xl font-bold mb-5">
            Top most interesting ScholarShip
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-[95%]  mx-auto">
          {scholars.map((scholar)=>
        <div key={scholar._id} className="bg-white rounded-xl shadow-lg  hover:shadow-2xl transition-all duration-800 relative cursor-pointer w-full  min-h-[470px]">
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
          <div className='flex justify-between items-center'>
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
            <div className='text-black/50 flex items-center justify-between'>
            <div className=" flex items-center gap-1 ">
            <FaMapMarkerAlt size={20} className="text-sm font-bold "/>
            <p className="text-sm font-bold ">{scholar.Country}</p>
          </div>
          <p className="text-sm font-bold ">Ranking : {scholar.WorldRank}</p>
            </div>
          {/* price */}
          <div className="  flex justify-between pt-5 items-center">
            <h2 className="text-2xl font-semibold text-primary">$ 
              { scholar.ApplicationFees }
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
          )}

        </div>
          <div className='mt-10 text-center'>
          <Link to={'/all-scholarship'} className ="my-button">
          View All
        </Link>
          </div>
      </div>

    </div>
  );
};

export default HomeCard;