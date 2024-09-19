import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/banner1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/banner2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/banner3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/banner4.jpg" alt="" /></SwiperSlide>
      </Swiper>
  );
}
