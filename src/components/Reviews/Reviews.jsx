import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import ArrayComments from "../../dados/Commentarys";
import CardComment from "../CardComment/CardComment";
import FormCommentary from "../Comments/FormCommentary";
import ListComments from "../Comments/ListComment";
import "./Reviews.css";
import LogoComment from '../../assets/img/logo-comment.svg'

class Reviews extends Component {
  constructor() {
    super();
    this.state = {
      comments:[]
    };
  }

  criarComment(name, email, comment){
    console.log(`um comment foi criado ` + this.name + this.email + this.comment);

    const newComment ={name, email, comment}
    const newArrayComments = [...this.state.comments, newComment];
    const newState = {
      comments:newArrayComments
    }
    this.setState(newState)
  }

  render() {
    return (
      <section>
        <Header>
          <h2 className="movie-header"><img src={LogoComment}></img>  Reviews</h2>
        </Header>
        <Container id="form-commentary">
          <FormCommentary criarComment={this.criarComment.bind(this)} />
          <ListComments comments={this.state.comments}/>
        </Container>
      </section>
    );
  }
}

export default Reviews;
