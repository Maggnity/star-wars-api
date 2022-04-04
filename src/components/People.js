import React, { useState, useEffect } from "react";
//import { Card } from "semantic-ui-react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { Container, Header, Icon } from "semantic-ui-react";
import Friends from "./../assets/img/user-friends.svg";
import "./People.css";
import CardPeople from "./CardPeople";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";


export default function People({ data }) {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people/?format=json");
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    fetchPeople();
  }, []);

  console.log("data", people);

  return (
    <section>
      <Header>
        <h2 className="movie-people">
          <img src={Friends}></img> People
        </h2>
      </Header>
      <Swiper
        loop={true}
        spaceBetween={30}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        style={{ padding: "20px" }}
      >
        {people
          ? people.map((people, index) => {
              return (
                <SwiperSlide key={index} className="slide">
                  <CardPeople name={people.name} born={people.homeworld} />
                </SwiperSlide>
              );
            })
          : "Loading"}
      </Swiper>
    </section>
  );
}
