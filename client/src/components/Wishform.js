import React, { useState } from "react";
import styled from "styled-components/macro";
import { addData } from "../utils/api";

const Wishform = ({ formStatus }) => {
  const [musicWish, setMusicWish] = useState({ status: "0" });
  const [greeting, setGreeting] = useState({ status: "0" });

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
          setGreeting({ status: 0, name: "", from: "", message: "" });
        }}
      >
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
  } else {
    return null;
  }
};

export default Wishform;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
