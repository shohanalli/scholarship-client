import React from 'react';

const Hero = () => {
return (
    <section
      className="w-full h-[80vh] flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503264116251-35a269479413')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find Your Perfect Opportunity
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Search scholarships, jobs, courses & more.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 w-full max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full md:flex-1 px-4 py-3 rounded-lg text-black outline-none"
          />
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;