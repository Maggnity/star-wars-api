import React from "react";
import User from "../../assets/img/user-circle.svg";
import { Card, Icon, Image } from "semantic-ui-react";
import MapMarker from "../../assets/img/map-marker-alt.svg";
import "./CardPeople.css";
//import { Router, Routes, Route } from "react-router-dom";

const CardPeople = ({ name, homeworld }) => (

      <Card id="card-people" className="card-people">
        <Card.Content className="card-content">
          <Image>
            <img src={User}></img>
          </Image>
          <Card.Header id="card-name" className="card-name">
            {name}
          </Card.Header>
          <Icon name="map-marker">
            <img src={MapMarker} />
          </Icon>
          <Card.Description id="card-homeworld" content={homeworld} />
        </Card.Content>
      </Card>
);

export default CardPeople;
