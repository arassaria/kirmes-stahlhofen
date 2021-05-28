import React from "react";
import Stream from "../components/Stream";
import styled from "styled-components/macro";

const Livestream = () => {
  const handleOnClick = () => {
    alert(
      "Dein Gruß/Musikwunsch wurde gespeichert. (Diese Benachrichtigung dient nur zu Demonstrationszwecken)"
    );
  };

  return (
    <Body>
      <Stream />
      <Form>
        <div>
          <p>Wähle aus:</p>
          <div>
            <input type="radio" id="music" name="wish" value="music" checked />
            <label for="music">Musikwunsch</label>
          </div>
          <div>
            <input type="radio" id="greeting" name="wish" value="greeting" />
            <label for="greeting">Grußsendung</label>
          </div>
        </div>
        <input
          type="text"
          placeholder="Musikwunsch o. zu grüßende Person(engruppe) eingeben"
        />
        <input
          type="text"
          placeholder="Grußnachricht eingeben(bei Musikwunsch nicht zu sehen)"
        />
        <input
          type="text"
          placeholder="Wer grüßt?(Optional und bei Musikwunsch nicht zu sehen"
        />
        <button onClick={handleOnClick}>Musikwunsch/Gruß abschicken</button>
      </Form>
    </Body>
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
