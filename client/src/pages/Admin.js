import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components/macro";
import { getAdminData } from "../utils/api";

const Admin = () => {
  const [musicRequests, setMusicRequests] = useState([]);
  const [greetings, setGreetings] = useState([]);

  useEffect(() => {
    try {
      const doFetch = async () => {
        const musicRequests = await getAdminData({ collectionName: "music" });
        const greetings = await getAdminData({ collectionName: "greets" });
        setMusicRequests(musicRequests);
        setGreetings(greetings);
      };
      doFetch();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Body>
      <Wishlist>
        {musicRequests?.map((musicRequest) => (
          <li key={musicRequest.id} id={musicRequest.id}>
            <Highlight>{musicRequest.song}</Highlight> by{" "}
            <Highlight>{musicRequest.artist}</Highlight>
            <AllowButton>✔</AllowButton>
            <DenyButton>X</DenyButton>
          </li>
        ))}
      </Wishlist>
      <GreetingsList>
        {greetings?.map((greeting) => (
          <li key={greeting.id} id={greeting.id}>
            <span>
              <Highlight>{greeting.from}</Highlight> möchte{" "}
              <Highlight>{greeting.name}</Highlight> mit folgendem Grüßen:
              <Message>{greeting.message}</Message>
            </span>
            <AllowButton>✔</AllowButton>
            <DenyButton>X</DenyButton>
          </li>
        ))}
      </GreetingsList>
    </Body>
  );
};

export default Admin;

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

const Highlight = styled.span`
  color: limegreen;
  font-style: italic;
`;

const Message = styled.span`
  color: blue;
  font-style: italic;
`;

const AllowButton = styled.button`
  background-color: limegreen;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

const DenyButton = styled.button`
  background-color: red;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;
