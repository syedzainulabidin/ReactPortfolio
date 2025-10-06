import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const SkillsSlider = ({ images = [], direction }) => {
  return (
    <div className="w-screen">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={5}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: direction ? true : false,
        }}
        allowTouchMove={true}
        className=""
        breakpoints={{
          320: { slidesPerView: 5, spaceBetween: 5 },
          640: { slidesPerView: 8, spaceBetween: 10 },
          1024: { slidesPerView: 10, spaceBetween: 15 },
        }}
      >
        {[...images, ...images].map((src, i) => (
          <SwiperSlide key={i}>
            <div className="flex justify-center items-center py-12">
              <img
                src={src}
                alt={`Skill ${i}`}
                className="w-16 h-16 object-contain relative transition-all duration-300"
              />
              <img
                src={src}
                alt={`Skill ${i}`}
                className="w-18 h-18 object-contain absolute z-40 opacity-50 transition-all duration-300 blur-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SkillsSlider;
