import React, { Component } from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
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
    this.props.criarComment(this.name, this.email, this.comment);
  }

  render() {
    return (
      <div>
        <form className="form-comment" onSubmit={this._criarComment.bind(this)}>
          <div className="text-id">
            <TextField
              className="text-name_input"
              onChange={this._handleMudancaName.bind(this)}
              type="text"
              placeholder="Nome"
              variant="outlined"
              margin="normal"
              fullWidth
            ></TextField>
            <TextField
              className="text-email_input"
              onChange={this._handleMudancaEmail.bind(this)}
              type="text"
              placeholder="E-mail"
              variant="outlined"
              margin="normal"
              fullWidth
            ></TextField>
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
          ></TextField>
          <Button id="button" className="button-submit" type="submit">
            Enviar
          </Button>
        </form>
      </div>
    );
  }
}

export default FormCommentary;

/*
export default function FormCommentary({ Enviar }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  

  

  const classes = useStyles();
  console.log(name, email, comment);

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(name, email, comment);
          //Enviar({ name, email, comment });
        }}
      >
        <div className="text-id">

        <TextField
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          type="text"
          placeholder="Nome"
          variant="outlined"
          margin="normal"
          className="text-name"
          fullWidth

        ></TextField>
        <TextField
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          type="text"
          placeholder="E-mail"
          variant="outlined"
          margin="normal"
          className="text-email"
          fullWidth
          
          ></TextField>
          </div>
        <TextField
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
          type="text"
          placeholder="Comentário"
          variant="outlined"
          margin="normal"
          fullWidth
          multiline
          rows={5}
        ></TextField>
        <Box sx={{ p: 0}}
        >
          <Button id="button" className="button-submit" type="submit">
            Enviar
          </Button>
          
        </Box>
      </form>
    </div>
  );
}
*/
