import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import madara from "../../assets/images/png/madara.jpg"
const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    
    <div className="overflow-hidden">
      <h1 className="text-red-600 text-5xl text-center">Slick-slider</h1>
      <Slider {...settings}>
        <div className="p-4">
          <img src={madara} alt="" className="w-[325px]" />
          <h3>Madara Uchhia</h3>
        </div>
        <div className="p-4">
          <img src={madara} alt="" className="w-[325px]" />
          <h3>Madara Uchhia</h3>
        </div>
        <div className="p-4">
          <img src={madara} alt="" className="w-[325px]" />
          <h3>Madara Uchhia</h3>
        </div>
        <div className="p-4">
          <img src={madara} alt="" className="w-[325px]" />
          <h3>Madara Uchhia</h3>
        </div>
        <div className="p-4">
          <img src={madara} alt="" className="w-[325px]" />
          <h3>Madara Uchhia</h3>
        </div>
        <div className="p-4">
          <img src={madara} alt="" className="w-[325px]" />
          <h3>Madara Uchhia</h3>
        </div>
      </Slider>
    </div>
  );
};

export default MySlider;
