import React from "react";
import styled from "styled-components/macro";

const Contact = () => {
  return (
    <Body>
      <Centered>
        <h1>Kontakt</h1>
        <h2>Probleme? Dann treten sie mit Uns in Kontakt</h2>
        <p>Technik: EVENTService Mario Bachmeier</p>
        <p>Sontige Anliegen: Ortsgemeinte Stahlhofen</p>
      </Centered>
    </Body>
  );
};

export default Contact;

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
  width: 100%;
  text-align: center;
`;
