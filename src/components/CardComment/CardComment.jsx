import React, { Component} from "react";
import { Card, Feed } from "semantic-ui-react";
import UserComent from '../../assets/img/user-comment.svg'
import {ReactComponent as LikeSVG} from '../../assets/img/thumbs-up.svg'
import {ReactComponent as DislikeSVG} from '../../assets/img/thumbs-down.svg'
import "./CardComment.css";


class CardComment extends Component {
  render() {
    return (
      <Card id="card-comment">
        <div>
          <Feed.Label className="user-comment" image={UserComent} />
          <Card.Content 
            className="card-content-comment"
            header={this.props.name}
            description={this.props.comment}
            />
            <div className="interaction">
              <div className="dislike">
                <DislikeSVG name="thumbs down"  color="red"/>
              </div>
              <div className="like">
                <LikeSVG name="thumbs up" color="green"/>
              </div>
            </div>

          <Card.Content extra>
          </Card.Content>
        </div>
      </Card>
    );
  }
}

export default CardComment
