import React from "react";
import { motion } from "framer-motion";
import { RiGooglePlayLine } from "react-icons/ri";
import image from "../../image/last.png";
import { FaApple } from "react-icons/fa";
const HomeLast = () => {
  return (
    <div className="bg-[#E6E6E6]">
      <div className="w-11/12 md:w-10/12 mx-auto py-15 md:pt-24 flex flex-col md:flex-row gap-8 justify-between">
             <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="flex-1 flex flex-col justify-center space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold text-secondary ">
            Online Learning Now In Your Fingertips
          </h1>
          <h1 className=" text-base lg:text-lg md:text-xl text-black/60 font-semibold ">
            have an understanding that, even if the work is not perfect, it's a
            work in progress.
          </h1>
          <div className="flex flex-col md:flex-row gap-3">
            <button className="btn bg-secondary text-white border-black">
                <RiGooglePlayLine />
                Google Play
            </button>
            <button className="btn bg-white text-black border-black/40">
            <FaApple />
            Apple Store
            </button>
          </div>
        </div>
        </motion.div>
                     <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="flex-1">
          <img className="object-cover" src={image} alt="" />
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeLast;
