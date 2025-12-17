import React, { useEffect, useState } from "react";
import image from "../../image/regigffster.png";
const DetailsRegister = () => {
  const targetDate = new Date("2025-12-31T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);
  return (
    <div >
      <div
        className="relative inset-0 bg-cover bg-center bg-no-repeat min-h-[60vh] sm:min-h-[50vh] md:min-h-[50vh]  w-full"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 w-11/12 md:w-10/12 mx-auto py-15 items-center  flex flex-col md:flex-row gap-10 justify-between">
          <div className="flex-1 space-y-4">
            <p className="text-base text-white font-bold">GET 100 OF ONLINE COURSES FOR FREE</p>
            <h1 className="text-2xl font-extrabold md:text-4xl  text-white">REGISTER NOW</h1>
            <div className="flex gap-5 text-2xl font-bold flex-wrap items-center justify-center">
              <div className="bg-white p-7 font-extrabold text-4xl text-primary/90 rounded-xl flex flex-col items-center">{days} <span className="text-base text-black">Days</span></div>
              <div className="bg-white p-7 font-extrabold text-4xl text-primary/90 rounded-xl flex flex-col items-center">{hours} <span className="text-base text-black">Hours</span></div>
              <div className="bg-white p-7 font-extrabold text-4xl text-primary/90 rounded-xl flex flex-col items-center">{minutes}<span className="text-base text-black"> Minutes</span></div>
              <div className="bg-white p-7 font-extrabold text-4xl text-primary/90 rounded-xl flex flex-col items-center">{seconds}<span className="text-base text-black"> Seconds</span></div>
            </div>
          </div>
          <div className=" flex-1">
            <div className="flex flex-col w-full space-y-3">
                <p className="text-base font-semibold text-white">Create your free account now and immediately get access to 100s of online courses.</p>
              <input
                className="bg-white p-2 rounded-sm"
                type="text"
                placeholder="Your Name*"
              />
              <input
                className="bg-white p-2 rounded-sm"
                type="email"
                placeholder="Your email*"
              />
              <input
                className="bg-white p-2 rounded-sm"
                type="number"
                placeholder="Your number*"
              />
              <button className="bg-primary/90 p-2 font-semibold rounded-sm ">Get it Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsRegister;
