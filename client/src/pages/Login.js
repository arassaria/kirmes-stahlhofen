import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { getLoginToken, getUserRights, validateUser } from "../utils/api";

const Login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [falseLogin, setFalseLogin] = useState(false);
  const [userRank, setUserRank] = useState("");

  useEffect(() => {
    try {
      const doFetch = async () => {
        if (localStorage.getItem("token") !== null) {
          const rank = await getUserRights({
            token: localStorage.getItem("token"),
          });
          setUserRank(rank);
          setLoggedIn(true);
          console.log(rank);
        }
      };
      doFetch();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Body>
      {!loggedIn && (
        <LoginForm
          onSubmit={async (event) => {
            event.preventDefault();
            if (loginData.username !== "") {
              const loginstate = await validateUser({ ...loginData });
              if (loginstate === true) {
                setLoggedIn(true);
                setFalseLogin(false);
                const token = await getLoginToken({
                  username: loginData.username,
                });
                setUserRank(await getUserRights({ token }));
                localStorage.setItem("token", token);
              } else {
                setFalseLogin(true);
              }
            }
            setLoginData({ username: "", password: "" });
          }}
        >
          <H1>Login</H1>
          {falseLogin && <p>Benutzername oder Passwort falsch</p>}
          <Input
            type="text"
            placeholder="Benutzername"
            value={loginData.username}
            onChange={(event) =>
              setLoginData({ ...loginData, username: event.target.value })
            }
          />
          <Input
            type="password"
            placeholder="Passwort"
            value={loginData.password}
            onChange={(event) =>
              setLoginData({ ...loginData, password: event.target.value })
            }
          />
          <Button type="submit">Einloggen</Button>
        </LoginForm>
      )}
      {loggedIn && userRank === "2" && (
        <>
          <FlowLink href="/admin">Zum Administrator-Bereich</FlowLink>
        </>
      )}
      {loggedIn && userRank === "1" && (
        <>
          <FlowLink href="/dj">Zum DJ-Bereich</FlowLink>
        </>
      )}
      {loggedIn && userRank === "0" && (
        <p>
          Bitte kontaktiere einen Admin, der dir die nötigen Rechte vergeben
          kann.
        </p>
      )}
    </Body>
  );
};

export default Login;

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

const LoginForm = styled.form`
  width: 80%;
  height: 100%;
  border: 2px solid black;
  border-radius: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;

  a {
    color: black;
  }
`;

const Input = styled.input`
  width: 60%;
  border-radius: 25px;
  background: transparent;
`;

const Button = styled.button`
  width: 60%;
  border-radius: 25px;
  background: grey;
`;

const FlowLink = styled.a`
  color: #e31e25;
`;

const H1 = styled.h1`
  text-align: center;
`;
