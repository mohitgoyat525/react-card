import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import warrior from "../../assets/images/png/warrior.jpg"
const MySwiper = () => {

  return (
    <div>
      <h2 className="text-center text-purple-800 text-3xl font-medium">
        Swiper-slider
      </h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="border border-solid border-black rounded-xl p-4">
            <img src={warrior} alt="warrior" className="w-full max-w-[375px]" />
            <h2>Ragnar Lothwork</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-solid border-black rounded-xl p-4">
            <img src={warrior} alt="warrior" className="w-full max-w-[375px]" />
            <h2>Ragnar Lothwork</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-solid border-black rounded-xl p-4">
            <img src={warrior} alt="warrior" className="w-full max-w-[375px]" />
            <h2>Ragnar Lothwork</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-solid border-black rounded-xl p-4">
            <img src={warrior} alt="warrior" className="w-full max-w-[375px]" />
            <h2>Ragnar Lothwork</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-solid border-black rounded-xl p-4">
            <img src={warrior} alt="warrior" className="w-full max-w-[375px]" />
            <h2>Ragnar Lothwork</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-solid border-black rounded-xl p-4">
            <img src={warrior} alt="warrior" className="w-full max-w-[375px]" />
            <h2>Ragnar Lothwork</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-solid border-black rounded-xl p-4">
            <img src={warrior} alt="warrior" className="w-full max-w-[375px]" />
            <h2>Ragnar Lothwork</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-solid border-black rounded-xl p-4">
            <img src={warrior} alt="warrior" className="w-full max-w-[375px]" />
            <h2>Ragnar Lothwork</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MySwiper; 
