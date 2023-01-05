import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/swiper.min.css";
import { Autoplay, FreeMode , Navigation } from "swiper";
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={0}
        speed={5000}
        navigation={true}
        loop={true}
        freeMode={true}
        freeModeMomentum={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, FreeMode , Navigation]}
        className=" mt-40 mySwiper"
      >
        <SwiperSlide>
          <img src="assets/img/1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/img/2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/img/3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/img/4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/img/5.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/img/6.png" alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="assets/img/1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/img/2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/img/3.png" alt="" />
        </SwiperSlide> */}
      </Swiper>

    
    </>
  );
}
