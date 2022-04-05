import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import ArrayComments from "../dados/commentarys";
import CardComment from "./CardComment";
import FormCommentary from "./FormCommentary";
import ListComments from "./ListComment";
import "./Reviews.css";
//import { Form } from "react-bootstrap-validation";

class Reviews extends Component {
  constructor() {
    super();
    this.comments = new ArrayComments();
  }

  render() {
    return (
      <section>
        <header>
          <h2 className="movie-header">Reviews</h2>
        </header>
        <Container id="form-commentary">
          <FormCommentary criarComment={this.comments.criarComment} />
          <CardComment />
          <ListComments comments={this.comments.comments} />
        </Container>
      </section>
    );
  }
}

export default Reviews;
