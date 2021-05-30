import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components/macro";
import { getDJData, updateData, deleteData, getUserRights } from "../utils/api";

const DJ = () => {
  const [musicRequests, setMusicRequests] = useState([]);
  const [greetings, setGreetings] = useState([]);

  const history = useHistory();

  useEffect(() => {
    try {
      const doFetch = async () => {
        if (localStorage.getItem("token")) {
          const rank = await getUserRights({
            token: localStorage.getItem("token"),
          });
          if (rank === "2") {
            const musicRequests = await getDJData({
              collectionName: "music",
            });
            const greetings = await getDJData({ collectionName: "greets" });
            setMusicRequests(musicRequests);
            setGreetings(greetings);
          } else if (rank === "1") {
            const musicRequests = await getDJData({
              collectionName: "music",
            });
            const greetings = await getDJData({ collectionName: "greets" });
            setMusicRequests(musicRequests);
            setGreetings(greetings);
          } else history.push("/");
        } else history.push("/");
      };
      doFetch();
    } catch (error) {
      console.log(error);
    }
  }, [history]);

  return (
    <Body>
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
                      status: "2",
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
                      name: "**********",
                      from: "**********",
                      message: "**********",
                      status: "2",
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
