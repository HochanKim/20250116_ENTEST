/* eslint-disable */
import React, { useState } from 'react';
import './App.css';
// 로고 호출
import Logo from './images/logo.svg';
import FooterLogo from './images/FooterLogo.js';

// 이미지 호출
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';

// 캐러셀, 슬라이드
import SimpleSlider from './components/Slide.js';


// 중심 메소드
function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Card />
      <Footer />
    </div>
  );
}

// 컴포넌트
// Header
function Header() {
  return (
    <div className='header w-full h-20 relative bg-white z-10'>
      <div className='h-20 fixed top-0 left-0 right-0 bg-white z-10'>
        <div className='w-10/12 h-20 mx-auto'>
          {/* 로고 */}
          <div className='w-52 h-full float-left flex items-center'>
            <img src={Logo} />
          </div>
          {/* 내비게이션 */}
          <div className='h-full font-bold uppercase float-right flex items-center'>
            <span className='mx-3'>
              <a href="javascript::">home</a>
            </span>
            <span className='mx-3'>
              <a href="javascript::">about</a>
            </span>
            <span className='mx-3'>
              <a href="javascript::">contact</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Intro
function Intro() {
  return (
    <SimpleSlider />
    // <div className='bg-banner w-full h-screen bg-cover flex items-center'>
    //   <div className='w-1/6'>
    //     {/* <img src={leftArrow} className='ml-24'/> */}
    //   </div>
    //   <div className='w-2/3 h-full text-white grid items-center'>
    //     <div className='w-2/5'>
    //       <h1 className='font-extrabold text-6xl mb-10 justify-end'>Lorem ipsum<br></br> dolor sit amet,</h1>
    //       <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur</p> 
    //       <p className='text-xl'>sed do eiusmod tempor incididunt ut</p> 
    //       <p className='text-xl'>labore et dolore magna aliqua.</p>
    //     </div>
    //   </div>
    //   <div className='w-1/6'>
    //     {/* <img src={rightArrow} className='ml-24'/> */}
    //   </div>
    // </div>
  )
}

// Card
function Card() {
  return (
    <div className='w-4/5 mx-auto container flex py-40'>
        <div className='w-72 mr-5 shadow-lg rounded-md'>
          <img src={img1} className='rounded-t-md'/>
          <div className='px-4'>
            <p className='font-extrabold text-3xl my-4'>Lorem ipsum dolor sit amet,</p>
            <p>Lorem ipsum dolor sit amet,</p>
            <p>consectetur adipiscing elit, </p>
            <p className='font-light text-xs mt-20 mb-4 text-gray-400'>Lorem ipsum dolor sit amet,</p>
          </div>
        </div>
        <div className='w-72 mr-5 shadow-lg rounded-md'>
          <img src={img2} className='rounded-t-md'/>
          <div className='px-4'>
            <p className='font-extrabold text-3xl my-4'>Lorem ipsum dolor sit amet,</p>
            <p>Lorem ipsum dolor sit amet,</p>
            <p>consectetur adipiscing elit, </p>
            <p className='font-light text-xs mt-20 mb-4 text-gray-400'>Lorem ipsum dolor sit amet,</p>
          </div>
        </div>
        <div className='w-72 mr-5 shadow-lg rounded-md'>
          <img src={img3} className='rounded-t-md'/>
          <div className='px-4'>
            <p className='font-extrabold text-3xl my-4'>Lorem ipsum dolor sit amet,</p>
            <p>Lorem ipsum dolor sit amet,</p>
            <p>consectetur adipiscing elit, </p>
            <p className='font-light text-xs mt-20 mb-4 text-gray-400'>Lorem ipsum dolor sit amet,</p>
          </div>
        </div>
        <div className='w-72 shadow-lg rounded-md'>
          <img src={img4} className='rounded-t-md'/>
          <div className='px-4'>
            <p className='font-extrabold text-3xl my-4'>Lorem ipsum dolor sit amet,</p>
            <p>Lorem ipsum dolor sit amet,</p>
            <p>consectetur adipiscing elit, </p>
            <p className='font-light text-xs mt-20 mb-4 text-gray-400'>Lorem ipsum dolor sit amet,</p>
          </div>
        </div>
    </div>
  )
}

// Custom
function Custom() {
  return (
    <>
    </>
  )
}

// Footer
function Footer() {
  return (
    <div className='bg-gray-950  text-teal-50'>
      <div className='wrap w-4/5 mx-auto py-16'>
        <div> 
          <div className='w-52 h-14 mb-5'>
              <FooterLogo />
          </div>
          <p className='font-light'>Copyrights 2024. <span className='font-extrabold'>테스트</span> All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default App;