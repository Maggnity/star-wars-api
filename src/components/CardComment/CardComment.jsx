import React, { Component} from "react";
import { Card, Icon } from "semantic-ui-react";
import "./CardComment.css";

class CardComment extends Component {
  render() {
    return (
      <Card id="card-comment">
        <Card.Content id="card-content" header={this.props.comment} />
        <Card.Content content={this.props.comment}>
        <p>{this.props.comment}</p>
        </Card.Content>
        <Card.Content extra>
          <Icon name="join" />4 Friends
          <Icon name="unjoin" />4 Friends
        </Card.Content>
      </Card>
    );
  }
}

export default CardComment
