import React, { Component} from "react";
import { Card, Icon } from "semantic-ui-react";
import "./CardComment.css";

class CardComment extends Component {
  render() {
    return (
      <Card id="card-comment">
        <Card.Content id="card-content" header="About Amy" />
        <Card.Content description={this.props.comment} />
        <Card.Content extra>
          <Icon name="join" />4 Friends
          <Icon name="unjoin" />4 Friends
        </Card.Content>
      </Card>
    );
  }
}

/*
const description = [
  "Amy is a violinist with 2 years experience in the wedding industry.",
  "She enjoys the outdoors and currently resides in upstate New York.",
].join(" ");

const CardComment = () => (
  <Card id="card-comment">
    <Card.Content id="card-content" header="About Amy" />
    <Card.Content description={description} />
    <Card.Content extra>
      <Icon name="join" />4 Friends
      <Icon name="unjoin" />4 Friends
    </Card.Content>
  </Card>
);*/

export default CardComment
