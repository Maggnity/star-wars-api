// Import Swiper React components
import { WidgetBody } from './CardMovie';
import styled from "styled-components";
import React from 'react';


const MovieContainer = styled.div`


//position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
`

const MovieTitle = styled.div`
width: 100%;
text-align: start;
color: #666666;
font-family: ubuntu;
size: 22px;
padding-left: 31px;
`

const carrosel = () => {
  return (
    <MovieContainer>
      <h2>Movies</h2>
          <WidgetBody />
        </MovieContainer>
  );
};

export default carrosel;
