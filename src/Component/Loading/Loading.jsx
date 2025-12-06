import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loading.json";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white/80">
      <div className="w-[150px] md:w-[250px]">
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Loading;