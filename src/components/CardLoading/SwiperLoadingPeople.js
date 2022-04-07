import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import LoadingPeople from './LoadingPeople';

const responsiveSwiper = {
    // when window width is >= 320px
    320: {
     slidesPerView: 1,
     spaceBetween: 20,
   },
   // when window width is >= 480px
   480: {
     slidesPerView: 2,
     spaceBetween: 30,
   },
   // when window width is >= 640px
   700: {
     slidesPerView: 3,
     spaceBetween: 40,
   },
  }

export default function SwiperLoadingPeople () {
    return (
        <Swiper
        id="swiper"
        loop={true}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        style={{ padding: "20px" }}
        breakpoints={responsiveSwiper}
        >
            <SwiperSlide>
                <LoadingPeople/>
            </SwiperSlide>
            <SwiperSlide>
                <LoadingPeople/>
            </SwiperSlide>
            <SwiperSlide>
                <LoadingPeople/>
            </SwiperSlide>
            <SwiperSlide>
                <LoadingPeople/>
            </SwiperSlide>
        </Swiper>
    )
}