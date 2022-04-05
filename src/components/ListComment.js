import React, { Component } from "react";
import CardComment from "./CardComment";

class ListComments extends Component {
  render() {
    return (
      <section>
        <ul className="lista-comments">
          {this.props.comments.map((comment, index) => {
            return (
              <li className="lista-notas_item" key={index}>
                <CardComment
                  indice={index}
                  name={comment.name}
                  commentary={comment.commentary}
                />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default ListComments;
