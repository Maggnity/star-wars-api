import React, { Component } from "react";
import CardComment from "../CardComment/CardComment";
import './ListComment.css'


class ListComments extends Component {
  render() {
    return (
        <ul className="lista-comments">
          {this.props.comments.map((comment, index) => {
            return (
              <li className="lista-comments_item" key={index}>
                <CardComment
                  indice={index}
                  name={comment.name}
                  email={comment.email}
                  comment={comment.comment}
                />
              </li>
              
            );
          })}
        </ul>
    );
  }
}

export default ListComments;
