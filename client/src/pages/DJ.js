import React from "react";
import styled from "styled-components/macro";

const DJ = () => {
  return (
    <Body>
      <Wishlist>
        <li>
          <span>Musikwunsch 1</span>
          <button>Gespielt</button>
          <button>Löschen</button>
        </li>
        <li>
          <span>Musikwunsch 2</span>
          <button>Gespielt</button>
          <button>Löschen</button>
        </li>
        <li>
          <span>Musikwunsch 3</span>
          <button>Gespielt</button>
          <button>Löschen</button>
        </li>
      </Wishlist>
      <GreetingsList>
        <li>
          <span>Gruß 1</span>
          <button>Gegrüßt</button>
          <button>Löschen</button>
        </li>
        <li>
          <span>Gruß 2</span>
          <button>Gegrüßt</button>
          <button>Löschen</button>
        </li>
        <li>
          <span>Gruß 3</span>
          <button>Gegrüßt</button>
          <button>Löschen</button>
        </li>
      </GreetingsList>
    </Body>
  );
};

export default DJ;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 900px) {
    margin: 50px 20%;
  }
  @media screen and (max-width: 900px) {
    margin: 20px 0;
  }
`;

const Wishlist = styled.ul`
  text-align: center;
  padding: 20px 0;
  background-color: grey;
  list-style-type: none;
  li {
    margin-bottom: 5px;
    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

const GreetingsList = styled.ul`
  text-align: center;
  padding: 20px 0;
  background-color: grey;
  list-style-type: none;
  margin-top: 5%;
  li {
    margin-bottom: 5px;
    :last-of-type {
      margin-bottom: 0;
    }
  }
`;