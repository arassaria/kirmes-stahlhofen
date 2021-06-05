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
            <div>
              <input
                type="radio"
                id="em"
                name="wish"
                value="em"
                onClick={() => setFormStatus("em")}
              />
              <label for="em">Zur EM-Abstimmung</label>
            </div>
          </div>
          <Wishform formStatus={formStatus} />
        </Form>
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
  background-color: #009746;
  padding: 10px;
  border: 1px solid black;
  box-shadow: 2px 2px 6px #333333;
  > :first-child {
    margin-bottom: 50px;
  }
`;

const H3 = styled.h3`
  text-align: center;
`;

const H2 = styled.h2`
  text-align: center;
`;
