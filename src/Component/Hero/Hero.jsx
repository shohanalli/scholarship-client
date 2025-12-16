import React from 'react';
import heroImg from '../../image/hero.png'

const Hero = ({ setSearchText }) => {
return (
<section
  className="w-full h-[80vh] bg-cover bg-left md:bg-center relative flex items-center justify-center md:justify-start"
  style={{ backgroundImage: `url(${heroImg})` }}
>
  <div className="relative z-10  px-4 max-w-2xl w-full">
    <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-4">
      Find Your Perfect Opportunity
    </h1>

    <p className="text-lg md:text-xl text-secondary mb-6">
      Search scholarships, jobs, courses & more.
    </p>
    <div className="flex flex-col md:flex-row gap-3 w-full mx-auto">
      <input
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search here..."
        className=" md:flex-1 px-4 py-3 rounded-xl text-secondary outline-1"
      />
      <button
       onClick={(e) => setSearchText(e.target.value)}
      className="px-6 py-3 cursor-pointer bg-primary rounded-lg font-semibold">
        Search
      </button>
    </div>
  </div>
</section>

  );
};

export default Hero;