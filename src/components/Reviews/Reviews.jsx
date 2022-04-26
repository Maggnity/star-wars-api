import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import FormCommentary from "../Comments/FormCommentary";
import ListComments from "../Comments/ListComment";
import "./Reviews.css";
import LogoComment from "../../assets/img/logo-comment.svg";

class Reviews extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }

  criarComment(name, email, comment) {
    const newComment = { name, email, comment };
    const newArrayComments = [newComment, ...this.state.comments];
    const newState = {
      comments: newArrayComments,
    };

    this.setState(newState);
    localStorage.setItem("comments", JSON.stringify(newState));
  }

  render() {
    return (
      <section>
        <Header>
          <h2 className="movie-header">
            <img src={LogoComment} alt='logo-comment'></img> Reviews
          </h2>
        </Header>
        <Container id="form-commentary">
          <FormCommentary criarComment={this.criarComment.bind(this)} />
          <ListComments comments={this.state.comments} />
        </Container>
      </section>
    );
  }
}

export default Reviews;
