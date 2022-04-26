import React from "react";
import { Link } from "react-router-dom";
import People from "../../components/People/People";
import Reviews from "../../components/Reviews/Reviews";
import { Button, Typography } from "@mui/material";
import { Container, Header } from "semantic-ui-react";
import "./PageMovie.css";

//Page inicial
function PageMovie({ title, description }) {
  return (
    <>
      <div>
        <section id="head-film" className="head-film">
          <Container id="container">
            <Header id="header-film">
              <Typography className="title" width="100%" conten>
                {title}
              </Typography>
            </Header>
          </Container>
        </section>
        <div>
          <Link to="/">
            <Button type="text">Back</Button>
          </Link>
          <p>{description}</p>
        </div>
      </div>
      <People />
      <Reviews />
    </>
  );
}

export default PageMovie;
