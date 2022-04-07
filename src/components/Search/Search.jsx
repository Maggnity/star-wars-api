import React, { useState, } from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { Container } from "@material-ui/core";
import "./Search.css";

const Form = styled.div`
  align-items: right;
  color: white;
`;

function Search() {
  const [find, setFind] = useState("");
  console.log(find);

  return (
      <Container component="article" maxWidth="sm">
        <Form
          style={{ alignItems: "center",
        borderColor:"lightseagreen" }}
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div>
            <TextField
              id="search-movie"
              label="Search movies or characters"
              type="search"
              fullWidth
              inputProps={{ style: { textAlign: "center"} }}
              margin="normal"
              onChange={(event) => {
              setFind(event.target.value);
              }}
            />
          </div>
        </Form>
      </Container>
  );
}

export default Search;
