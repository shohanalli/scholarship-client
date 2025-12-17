import React from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxios/UseAxiosSecure";

const Review = () => {
    const useAxiosSecure = UseAxiosSecure();
  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await useAxiosSecure.get('/all-reviews');
      return res.data;
    },
  });
  console.log(reviews)
  return (
    <div className="pt-20 pb-25">
      <section className="flex flex-col justify-center items-center space-y-4 py-8">

        <h2 className="text-lg md:text-2xl font-bold text-secondary">
          What our Students are sayings
        </h2>
      </section>

      <>
        <Swiper
        key={reviews.length}
          effect={"coverflow"}
           loop = {true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
          coverflowEffect={{
            rotate: 30,
            stretch: '50%',
            depth: 200,
            modifier: 1,
            slideShadows: true,
            scale: 0.80,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((reviw) => (
            <SwiperSlide key={reviw._id}>
              <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-sm">
                <div className="text-secondary/90 text-5xl">“</div>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  {reviw.reviewComment}
                </p>
                <div className="border-t border-dotted border-gray-300 mt-4 mb-4"></div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full ">
                    <img
                    className="w-full h-full rounded-full "
                    src={reviw.reviewerImage} alt="" />
                  </div>
                  <div>
                    <h4 className="font-bold text-teal-900">
                      {reviw.userName}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {reviw.subjectCategory} Department Student
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Review;
