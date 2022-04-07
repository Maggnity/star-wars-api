import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Header } from "semantic-ui-react";
import LogoStar from "../../assets/img/star.svg";
import CardExampleCard from "../CardMovie/CardMovie";
import SwiperLoadingFilm from "../CardLoading/SwiperLoadingFilm";
import "./Films.css";

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
};

export default function Films({}) {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState([true]);
  try {
    useEffect(() => {
      async function fetchFilms() {
        let res = await fetch("https://swapi.dev/api/films/?format=json");
        let data = await res.json();
        setFilms(data.results);
        setLoading(false);
      }

      fetchFilms();
    }, []);
  } catch (e) {
    console.log(e);
  }

  function SwiperMovies() {
    return (
      <Swiper
        id="swiper"
        loop={true}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        style={{ padding: "20px" }}
        F
        breakpoints={responsiveSwiper}
      >
        {films.map((films, index) => {
          return (
            <SwiperSlide key={index} className="swiper-slide">
              <CardExampleCard
                title={films.title}
                description={films.opening_crawl}
                date={films.release_date}
                director={films.director}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }
  return (
    <section className="movie-section">
      <Header>
        <h2 className="movie-header">
          <img src={LogoStar}></img> Movies
        </h2>
      </Header>

      {loading ? <SwiperLoadingFilm /> : <SwiperMovies />}
    </section>
  );
}
