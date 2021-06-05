import React, { useState } from "react";
import styled from "styled-components/macro";
import { addData } from "../utils/api";

const Wishform = ({ formStatus }) => {
  const [musicWish, setMusicWish] = useState({ status: "0" });
  const [greeting, setGreeting] = useState({ status: "0" });
  const [fussball, setFussball] = useState({ value: "ja" });

  if (formStatus === "music") {
    return (
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          addData({ collectionName: "music" }, musicWish);
          setMusicWish({ status: "0", artist: "", song: "" });
        }}
      >
        <input
          type="text"
          value={musicWish.song}
          placeholder="Songtitel eingeben"
          onChange={(event) =>
            setMusicWish({ ...musicWish, song: event.target.value })
          }
          required
        />
        <input
          type="text"
          value={musicWish.artist}
          placeholder="Interpret eingeben"
          onChange={(event) =>
            setMusicWish({ ...musicWish, artist: event.target.value })
          }
          required
        />
        <button type="submit">Musikwunsch abschicken</button>
      </Form>
    );
  } else if (formStatus === "greets") {
    return (
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          addData({ collectionName: "greets" }, greeting);
          setGreeting({ status: "0", name: "", from: "", message: "" });
        }}
      >
        <FlowLink href="https://www.og-stahlhofen.de/datenschutzerklaerung">
          Mit dem Absenden dieses Formulares stimmen sie dem Speichern der von
          ihnen genannten Daten nach DSGVO zu.
        </FlowLink>
        <input
          type="text"
          value={greeting.name}
          placeholder="Wer soll gegrüßt werden?"
          onChange={(event) =>
            setGreeting({ ...greeting, name: event.target.value })
          }
          required
        />
        <input
          type="text"
          value={greeting.from}
          placeholder="Wer grüßt?"
          onChange={(event) =>
            setGreeting({ ...greeting, from: event.target.value })
          }
          required
        />
        <input
          type="text"
          value={greeting.message}
          placeholder="Was möchtest du sagen?"
          onChange={(event) =>
            setGreeting({ ...greeting, message: event.target.value })
          }
          required
        />
        <button type="submit">Grußwunsch abschicken</button>
      </Form>
    );
  } else if (formStatus === "em") {
    return (
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          addData({ collectionName: "fussball-em" }, fussball);
          setFussball();
          alert("Vielen Dank für deine Teilnahme an der Abstimmung.");
        }}
      >
        <h3>Wollt ihr ein Public Viewing zur Fussball-EM?</h3>
        <div>
          <input
            type="radio"
            id="ja"
            name="fussballEm"
            value="Ja"
            onChange={(event) => setFussball({ value: event.target.value })}
            defaultChecked
          />
          <label for="ja">Ja</label>
        </div>
        <div>
          <input
            type="radio"
            id="nein"
            name="fussballEm"
            value="nein"
            onChange={(event) => setFussball({ value: event.target.value })}
          />
          <label for="nein">Nein</label>
        </div>
        <button type="submit">Abstimmen</button>
      </Form>
    );
  } else {
    return null;
  }
};

export default Wishform;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

const FlowLink = styled.a`
  color: #e31e25;
  margin-bottom: 15px;
`;
