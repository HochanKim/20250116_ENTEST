/* eslint-disable */
import React, { useState } from "react";

// 'npm install react-slick --save' 정상설치
// 'npm install slick-carousel --save' 정상설치
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 배너 이미지 호출
import banner1 from "../images/main.jpg";
import banner2 from "../images/img3.jpg";
import banner3 from "../images/img4.jpg";




function SimpleSlider() {
  var settings = {
    // slick 라이브러리 변수 선언 (settings)
    dots: true,
    infinite: true,
    autoplay : true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
        <div className="w-screen h-screen">
          <img src={banner1} />
        </div>
        <div className="w-screen h-screen">
          <img src={banner2} />
        </div>
        <div className="w-screen h-screen">
          <img src={banner3} />
      </div>
    </Slider>
  );
}



export default SimpleSlider;