import React from "react";
import ImageMovie from "./../img/image-film.svg";
import styled from "styled-components";
import "./PageMovie.css";
import { useNavigate, useParams } from "react-router-dom";
import People from "../../components/People";
import Reviews from "../../components/Reviews";

const Background = styled.div`
  background-image: url(${ImageMovie});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 350px;
`;

function PageMovie({}) {
  let history = useNavigate();
  let back = (e) => {
    e.stopPropagation();
    history.goBack();
  };
  const { title, description } = useParams();
  console.log(title);
  return (
    <>
      <div>{JSON.stringify(title, description)}</div>

      <div>
        <Background>
          <h1>{title}</h1>
        </Background>
        <div>
          <button type="button" onClick={back} content="<< Back">
            "Back"
          </button>
          <p>{description}</p>
        </div>
      </div>
      <People />
      <Reviews />
    </>
  );
}

export default PageMovie;
