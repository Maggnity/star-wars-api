import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";
import "./FormCommentary.css";

class FormCommentary extends Component {
  constructor(props) {
    super(props);
    this.name = "";
    this.email = "";
    this.comment = "";
  }

  _handleMudancaName(evento) {
    evento.stopPropagation();
    this.name = evento.target.value;
  }
  _handleMudancaEmail(evento) {
    evento.stopPropagation();
    this.email = evento.target.value;

  }
  _handleMudancaComment(evento) {
    evento.stopPropagation();
    this.comment = evento.target.value;
  }

  _criarComment(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarComment(this.name, this.email, this.comment)
  }

  render() {
    return (
        <form className="form-comment" 
          onSubmit={this._criarComment.bind(this)}>
          <div className="text-id">
            <TextField
              className="text-name_input"
              onChange={this._handleMudancaName.bind(this)}
              type="text"
              placeholder="Nome"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
            <TextField
              className="text-email_input"
              onChange={this._handleMudancaEmail.bind(this)}
              type="email"
              placeholder="E-mail"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
          </div>
          <TextField
            className="text-comment_input"
            onChange={this._handleMudancaComment.bind(this)}
            type="text"
            placeholder="Comentário"
            variant="outlined"
            margin="normal"
            fullWidth
            multiline
            rows={5}
            required
          />
          <Button id="button" className="button-submit" onClick={this._criarComment.bind(this)}>
            Enviar
          </Button>
        </form>
    );
  }
}

export default FormCommentary;