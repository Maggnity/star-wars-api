import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import LoadingFilm from './LoadingFilm';

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

export default function SwiperLoadingFilm () {
    return (
        <Swiper
        id="swiper"
        loop={true}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        style={{ padding: "20px" }}F
        breakpoints={responsiveSwiper}
        >
            <SwiperSlide>
                <LoadingFilm/>
            </SwiperSlide>
            <SwiperSlide>
                <LoadingFilm/>
            </SwiperSlide>
            <SwiperSlide>
                <LoadingFilm/>
            </SwiperSlide>
        </Swiper>
    )
}