import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import warrior from "../assets/images/png/warrior.jpg"
const MySwiper = () => {

    return (
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
    );
};

export default MySwiper; 
