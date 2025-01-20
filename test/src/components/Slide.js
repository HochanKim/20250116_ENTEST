/* eslint-disable */
import React, { useState } from "react";

// 'npm install react-slick --save' 정상설치
// 'npm install slick-carousel --save' 정상설치
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 배너 이미지 호출
import Banner1 from "../images/main.jpg";
import Banner2 from "../images/img3.jpg";
import Banner3 from "../images/img4.jpg";


function SimpleSlider() {
  var settings = {
    // slick 라이브러리 변수 선언 (settings)
    dots: false,
    infinite: true,
    autoplay : false,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <Slider {...settings}>
        <div className="w-screen h-screen relative">
          <img src={Banner1} />
          <div className='w-2/5 absolute top-1/3 left-40 float-start text-white'>
            <h1 className='font-extrabold text-6xl mb-10 justify-end'>Lorem ipsum<br></br> dolor sit amet,</h1>
            <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur</p> 
            <p className='text-xl'>sed do eiusmod tempor incididunt ut</p> 
            <p className='text-xl'>labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="w-screen h-screen relative">
          <img src={Banner2} />
          <div className='w-2/5 absolute top-1/3 left-40 float-start text-white'>
            <h1 className='font-extrabold text-6xl mb-10 justify-end'>Lorem ipsum<br></br> dolor sit amet,</h1>
            <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur</p> 
            <p className='text-xl'>sed do eiusmod tempor incididunt ut</p> 
            <p className='text-xl'>labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="w-screen h-screen relative">
          <img src={Banner3} />
          <div className='w-2/5 absolute top-1/3 left-40 float-start text-black'>
            <h1 className='font-extrabold text-6xl mb-10 justify-end'>Lorem ipsum<br></br> dolor sit amet,</h1>
            <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur</p> 
            <p className='text-xl'>sed do eiusmod tempor incididunt ut</p> 
            <p className='text-xl'>labore et dolore magna aliqua.</p>
          </div>
      </div>
    </Slider>
    
  );
}


export default SimpleSlider;