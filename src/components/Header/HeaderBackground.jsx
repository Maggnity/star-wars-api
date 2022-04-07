import Search from "../Search/Search";
import React from "react";
import './HeaderBackground.css'
import { Typography } from "@material-ui/core";
import { Container } from "semantic-ui-react";



function Head() {
  return (
    <section id="head" className="head">
      <Container id="head-content">
          <Typography class="title" width="100%">
            Star Wars Movie
          </Typography>
          <Search />
      </Container>
    </section>
  );
}

export default Head;
