import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import People from "../../components/People/People";
import Reviews from "../../components/Reviews/Reviews";
import { Button, Typography } from "@mui/material";
import { Container, Header } from "semantic-ui-react";
import "./PageMovie.css";



//Page inicial
function PageMovie({}) {
  
    let history = useNavigate();

    function handleClick(){
      history.push("/")
    }
  
  let back = (e) => {
    e.stopPropagation();
    history.goBack();
  };
  const { title, description } = useParams();
  console.log(title);
  return (
    <>
      <div>
        <section id="head-film" className="head-film">
          <Container id="container">
            <Header id="header-film">
              <Typography class="title" width="100%">
                {title}
              </Typography>
            </Header>
          </Container>
        </section>
        <div>
          <Button type="text" onClick={handleClick}>
            Back
          </Button>
          <p>{description}</p>
        </div>
      </div>
      <People />
      <Reviews />
    </>
  );
}

export default PageMovie;
