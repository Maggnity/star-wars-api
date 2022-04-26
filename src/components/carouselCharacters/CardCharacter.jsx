import styled from "styled-components";
import FetchData from "../../swapi";
import React from "react";

const People = styled.div`
  background-color: #f5f5f5;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 226px;
  height: 204px;
  align-items: center;
  text-align: center;
  display: block;
  justify-content: space-between;
`;

const UserCircle = styled.div`
  position: absolute;
  width: 83px;
  left: calc(50% - 83px / 2);
  background-color: #ff5a56;
  border-radius: 100%;
`;

const CardName = styled.div`
  font-family: ubuntu;
  display: block;
  font-size: 22px;
  text-align: center;
  color: #0ca1df;
  line-height: 25px;
  width: 100%;
  position: relative;
  top: 55%;
`;

const CardLocal = styled.div`
  font-family: ubuntu;
  font-size: 14px;
  text-align: center;
  color: #666666;
  position: relative;
  top: 60%;
  width: 100%;
  display: absolute;
`;
