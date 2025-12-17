import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../image/Screenshot_19.png';
import image2 from '../../image/Screenshot_20.png';
import image3 from '../../image/dfdfs.png';
// Import Swiper styles;
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
return (
    <>
<div className='bg-white'>
      <div className='w-11/12 md:w-10/12 mx-auto pt-10 pb-20'>
    <h1 className='text-3xl font-bold text-secondary py-12 text-center'>Why Students Love US?</h1>
        <Swiper
  loop={true}
  speed={2500}          
  autoplay={{
    delay: 0,            
    disableOnInteraction: false,
    waitForTransition: false,
  }}
  slidesPerView={2}
  spaceBetween={30}
  breakpoints={{
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
  }}
  pagination={{ clickable: true }}
  modules={[ Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='border border-black/30 shadow-sm py-10 px-3 text-center'>
            <div>

                <div className='flex flex-col items-center pb-5'>
                <FaQuoteLeft size={24} className='text-black/50 mb-1.5'/>
                <p className='font-semibold text-black/60'>" I have an understanding that, even if the work is not perfect, it's a work in progress. And the reason why I'm on Skill share is to develop a skill. I feel that it's a safe space. "</p>
                </div>
                <div className='flex items-center justify-center'>
                    <img className='h-12 w-12 rounded-full' src={image1} />
                    <div>
                        <h1 className='font-bold text-xl text-secondary'>Tony Chester</h1>
                        <p className='font-semibold text-black/50 ml-5'>Photography course</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='border border-black/30 shadow-sm py-10 px-3 text-center'>
            <div>

                <div className='flex flex-col items-center pb-5'>
                <FaQuoteLeft size={24} className='text-black/50 mb-1.5'/>
                <p className='font-semibold text-black/60'>" Receiving this scholarship empowered me to pursue higher education without worry, opened new opportunities, strengthened my motivation, and inspired me to give back"</p>
                </div>
                <div className='flex items-center justify-center'>
                    <img className='h-12 w-12 rounded-full' src={image2} />
                    <div>
                        <h1 className='font-bold text-xl text-secondary'>DeVeor R</h1>
                        <p className='font-semibold text-black/50 ml-5'>Business course</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
                <SwiperSlide className='border border-black/30 shadow-sm py-10 px-3 text-center'>
            <div>

                <div className='flex flex-col items-center pb-5'>
                <FaQuoteLeft size={24} className='text-black/50 mb-1.5'/>
                <p className='font-semibold text-black/60'>" This program supported my dreams when resources were limited, encouraged academic excellence, provided mentorship, and helped me build a strong foundation"</p>
                </div>
                <div className='flex items-center justify-center'>
                    <img className='h-12 w-12 rounded-full' src={image3} />
                    <div>
                        <h1 className='font-bold text-xl text-secondary'>Robert Pricket</h1>
                        <p className='font-semibold text-black/50 ml-5'>Director biography</p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
</div>
    </>
  );
};

export default Testimonials;