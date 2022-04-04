import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Header, Icon } from "semantic-ui-react";
import LogoStar from "./../assets/img/star.svg";
import "./Films.css";
import CardExampleCard from "./CardMovie";

export default function Films({ data }) {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState([true]);
  console.log("data", films);

  useEffect(() => {
    async function fetchFilms() {
      let res = await fetch("https://swapi.dev/api/films/?format=json");
      let data = await res.json();
      setFilms(data.results);
      setLoading(false);
    }

    fetchFilms();
  }, []);

    

  return (
    <section className="movie-section">
      <Header>
        <h2 className="movie-header">
          <img src={LogoStar}></img> Movies
        </h2>
      </Header>
      
      <Swiper
        loop={true}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        style={{ padding: "20px" }}
      >
        {films
          ? films.map((films, index) => {
              return (
                <SwiperSlide key={index}>
                  <CardExampleCard 
                    title={films.title}
                    description={films.opening_crawl}
                    date={films.release_date}
                    director={films.director}
                    /> 
                   
                </SwiperSlide>
              );
            })
          : "Loading"}
      </Swiper>
    </section>
  );
}
