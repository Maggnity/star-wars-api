import Search from "../Search";
import styled from "styled-components";
import background from "../../assets/img/topImage.png";
import React from "react";


const Background = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
`;



function Head({title, description}) {
  return (
    <Background>
      <section
        className="cabecalho"
        style={{ verticalAlign: "middle", padding: "80px" }}
        margin
      >
        <h2 class="title">Star Wars Movie</h2>
        <Search />
      </section>
    </Background>
  );
}

export default Head;
