import React from "react";
import styled from "styled-components/macro";

const Sponsors = () => {
  return (
    <Body>
      <SponsorList>
        <Heading>Sponsoren</Heading>
        <li>EVENTService Mario Bachmeier</li>
      </SponsorList>
    </Body>
  );
};

export default Sponsors;

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

const SponsorList = styled.ul`
  width: 100%;
  text-align: center;
  list-style-type: none;
`;

const Heading = styled.h1`
  text-transform: uppercase;
  font-size: rem-calc(25);
  margin-bottom: 5%;
`;
