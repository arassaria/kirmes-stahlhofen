import React from "react";
import styled from "styled-components/macro";

const Impressum = () => {
  return (
    <Body>
      <Centered>Hier kommt ein Impressum hin</Centered>
    </Body>
  );
};

export default Impressum;

const Body = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 900px) {
    margin: 50px 20%;
  }
  @media screen and (max-width: 900px) {
    margin: 20px 0;
  }
`;

const Centered = styled.div`
  text-align: center;
  width: 100%;
`;
