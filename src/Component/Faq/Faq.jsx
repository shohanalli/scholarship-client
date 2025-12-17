import React from "react";
import { motion } from "framer-motion";
import image from "../../image/Screensho9.png";
const Faq = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto py-15 md:py-24 flex flex-col md:flex-row gap-5">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        
      >
        <div className="flex-1 flex flex-col justify-center space-y-2">
          <h1 className="text-xl text-center sm:text-left md:text-4xl text-secondary font-bold ">
            Limitless learning, more possibilities
          </h1>
          <h1 className=" text-base text-center sm:text-left lg:text-lg md:text-xl text-black/40 font-semibold ">
            Answer a few questions for your top picks
          </h1>
          <button className="block mt-5 mx-auto w-full sm:w-6/12 cursor-pointer py-4 h-auto text-center text-base font-semibold text-white bg-primary/90">
            Join Free Now
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="flex-1">
          <img className="object-cover" src={image} alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default Faq;
