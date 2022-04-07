import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Header } from "semantic-ui-react";
import Friends from "../../assets/img/user-friends.svg";
import CardPeople from "../CardPeople/CardPeople";
import SwiperLoadingPeople from "../CardLoading/SwiperLoadingPeople";
import "./People.css";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

export default function People({}) {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState([true]);
  try {
    useEffect(() => {
      async function fetchPeople() {
        let res = await fetch("https://swapi.dev/api/people/?format=json");
        let data = await res.json();
        setPeople(data.results);
        setLoading(false);
      }

      fetchPeople();
    }, []);
  } catch (e) {
    console.log(e);
  }

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
    // when window width is >= 480px
    580: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    700: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  };

  function SwiperPeople() {
    return (
      <Swiper
        loop={true}
        spaceBetween={30}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        style={{ padding: "20px" }}
        breakpoints={responsiveSwiper}
      >
        {people.map((people, index) => {
          return (
            <SwiperSlide key={index} className="slide">
              <CardPeople name={people.name} born={people.homeworld} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }

  return (
    <section>
      <Header>
        <h2 className="movie-people">
          <img src={Friends}></img> People
        </h2>
      </Header>
      {loading ? <SwiperLoadingPeople /> : <SwiperPeople />}
    </section>
  );
}
