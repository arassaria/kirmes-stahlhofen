import React from "react";
import styled from "styled-components/macro";

const Programm = () => {
  return (
    <Body>
      <CenteredList>
        <Heading>Programm</Heading>
        <Headline>Freitag 04.Juni 2021</Headline>
        <p>Kirmesbaumstellen</p>
        <p>Live-Party vom Kirmeswagen mit DJ Christian</p>
        <Headline>Samstag 05.Juni 2021</Headline>
        <p>Live-Party vom Kirmeswagen mit DJ Christian</p>
        <p>???</p>
        <Headline>Sonntag 05.Juni 2021</Headline>
        <p>Sonntagsmesse LIVE aus St. Wendelin</p>
      </CenteredList>
    </Body>
  );
};

export default Programm;

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

const CenteredList = styled.ul`
  width: 100%;
  text-align: center;
`;

const Headline = styled.h2`
  text-transform: uppercase;
  font-size: rem-calc(20);
  margin-top: 5%;
  :first-of-type {
    margin-top: 0;
  }
`;

const Heading = styled.h1`
  text-transform: uppercase;
  font-size: rem-calc(25);
  margin-bottom: 5%;
`;
