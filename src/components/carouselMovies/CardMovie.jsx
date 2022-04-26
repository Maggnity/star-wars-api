import styled from "styled-components";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from 'react';


const Card = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border-radius: 3px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
`;

const CardTitle = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  color: #009cda;
  * {
    margin: 0;
  }
`;

const CardContent = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export function WidgetBody({data}) {
  return(
    <>
      <h1>Filmes</h1>
      
        })}
    </>
  )
}
export default Card;
