import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import Filter from "./../assets/img/filter.png";
import LogoDate from "./../assets/img/calendar-icon.svg";
import LogoChair from "./../assets/img/chair-director.svg";
import { Routers, Link } from "react-router-dom";
import './CardMovie.css'

function goMovie() {
  console.log("Foi pro link")
  return (
    <Link to="/pagemovie"/>
    )
}

const CardExampleCard = ({ title, description, date, director }) => (
  <Link to="/pagemovie">
  <Card
    id="card-film"
    className="card-film"
    onClick={function atchim() {
      console.log(title, description)
      goMovie(title,description)

    }}
    onMouseOver={console.log("em cima")}
  >
    <Image className="image-film">
      <img src={Filter} width="100%"></img>
    </Image>
    <Card.Content id="card-content">
      <Card.Header id="card-title" content={title}/>
      <Card.Description id="card-description" content={description} />
      <div id="info-film">
      <Card.Description id="director">
        <img src={LogoChair} alt="Logo diretor" />
        {director}
      </Card.Description>
      <Card.Description>
        <img src={LogoDate} alt="Logo calendário" />
        {date}
      </Card.Description>
      </div>
    </Card.Content>
  </Card>
      </Link>
);

export default CardExampleCard;
