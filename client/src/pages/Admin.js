import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components/macro";
import {
  deleteData,
  getAdminData,
  updateData,
  updateStreamSource,
} from "../utils/api";

const Admin = () => {
  const [musicRequests, setMusicRequests] = useState([]);
  const [greetings, setGreetings] = useState([]);
  const [streamSource, setStreamSource] = useState("");

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

  const handleOnChange = (event) => {
    setStreamSource(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateStreamSource({ src: streamSource });
    setStreamSource("");
  };

  return (
    <Body>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={streamSource}
          placeholder="StreamSource"
          onChange={handleOnChange}
        />
        <input type="submit" />
      </form>
      <Wishlist>
        {musicRequests?.map((musicRequest) => (
          <li key={musicRequest._id} id={musicRequest._id}>
            <span>
              <Highlight>{musicRequest.song}</Highlight> by{" "}
              <Highlight>{musicRequest.artist}</Highlight>
            </span>
            <Form>
              <AllowButton
                onClick={() => {
                  updateData(
                    { collectionName: "music", id: musicRequest._id },
                    {
                      song: musicRequest.song,
                      artist: musicRequest.artist,
                      status: "1",
                    }
                  );
                }}
              >
                ✔
              </AllowButton>
              <DenyButton
                onClick={() => {
                  deleteData({ collectionName: "music", id: musicRequest._id });
                }}
              >
                X
              </DenyButton>
            </Form>
          </li>
        ))}
      </Wishlist>
      <GreetingsList>
        {greetings?.map((greeting) => (
          <li key={greeting._id} id={greeting._id}>
            <span>
              <Highlight>{greeting.from}</Highlight> möchte{" "}
              <Highlight>{greeting.name}</Highlight> mit folgendem Grüßen:
              <Message>{greeting.message}</Message>
            </span>
            <Form>
              <AllowButton
                onClick={() => {
                  updateData(
                    { collectionName: "greets", id: greeting._id },
                    {
                      name: greeting.name,
                      from: greeting.from,
                      message: greeting.message,
                      status: "1",
                    }
                  );
                }}
              >
                ✔
              </AllowButton>
              <DenyButton
                onClick={() => {
                  deleteData({ collectionName: "greets", id: greeting._id });
                }}
              >
                X
              </DenyButton>
            </Form>
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
    width: 60%;
    margin: 4px auto;
    display: flex;
    justify-content: space-between;
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
    display: flex;
    justify-content: space-between;
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

const Form = styled.form`
  display: inline-block;
`;
