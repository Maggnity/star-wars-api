import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { Container } from "@material-ui/core";
import './Search.css'

const Form = styled.div`
  align-items: center;
`;

function Search() {
  const [find, setFind] = useState("");
  return (
    <Container component="article" maxWidth="sm">
      <Form
        style={{ alignItems: "center" }}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Box
          id="box"
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            width: 500,
            maxWidth: "100%",
            textAlign: "right",
            color: '#e3f2fd',
            theme: 'palette.primary.light'
          }}
        >
          <div>
            <TextField
              id="outlined-password-input"
              label="Search movies or characters"
              type="search"
              fullWidth
              inputProps={{ style: { textAlign: "center" } }}
              margin="normal"
              onChange={event => {setFind(event.target.value)}}
            />
          </div>
        </Box>
      </Form>
    </Container>
  );
}

export default Search;
