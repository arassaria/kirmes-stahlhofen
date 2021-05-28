import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Body>
      <LoginForm>
        <Input type="text" placeholder="Benutzername" />
        <Input type="password" placeholder="Passwort" />
        <Button type="submit">Einloggen</Button>
        <Link to="/admin">
          Zum Administrator-Bereich(Shortcut während des Developments)
        </Link>
        <Link to="/dj">Zum DJ-Bereich(Shortcut während des Developments)</Link>
      </LoginForm>
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

const LoginForm = styled.div`
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
