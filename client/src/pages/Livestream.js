import React, { useState } from "react";
import Stream from "../components/Stream";
import styled from "styled-components/macro";
import Wishform from "../components/Wishform";

const Livestream = () => {
  const [formStatus, setFormStatus] = useState("music");

  return (
    <>
      <H2>Kirmes Stahlhofen</H2>
      <H3>04.Juni 2021 - 06.Juni 2021</H3>
      <Body>
        <Stream />
        <Form>
          <div>
            <p>Wähle aus:</p>
            <div>
              <input
                type="radio"
                id="music"
                name="wish"
                value="music"
                onClick={() => setFormStatus("music")}
                defaultChecked
              />
              <label for="music">Musikwunsch</label>
            </div>
            <div>
              <input
                type="radio"
                id="greets"
                name="wish"
                value="greets"
                onClick={() => setFormStatus("greets")}
              />
              <label for="greets">Grußsendung</label>
            </div>
          </div>
        </Form>
        <Wishform formStatus={formStatus} />
      </Body>
    </>
  );
};

export default Livestream;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 900px) {
    margin: 50px 20%;
  }
  @media screen and (max-width: 900px) {
    margin: 20px 0;
  }
`;

const Form = styled.div`
  background-color: green;
  display: flex;
  flex-direction: column;
`;

const H3 = styled.h3`
  text-align: center;
`;

const H2 = styled.h2`
  text-align: center;
`;
