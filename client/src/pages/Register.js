import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components/macro";
import { checkAvailability, registerNewUser } from "../utils/api";

const Register = () => {
  const [userData, setUserData] = useState({});

  const history = useHistory();

  return (
    <Form
      onSubmit={async (event) => {
        event.preventDefault();
        const usernameAvailable = await checkAvailability({
          username: userData.username,
        });
        if (usernameAvailable === true) {
          registerNewUser({ ...userData });
          setUserData({ username: "", password: "" });
          history.push("/");
        } else {
          alert(
            "Benutzername schon vergeben. Bitte wählen sie einen anderen Benutzernamen aus."
          );
        }
      }}
    >
      <input
        type="text"
        placeholder="Benutzername"
        value={userData.username}
        onChange={(event) => {
          setUserData({ ...userData, username: event.target.value });
        }}
      />
      <input
        type="password"
        placeholder="Passwort"
        value={userData.password}
        onChange={(event) =>
          setUserData({ ...userData, password: event.target.value })
        }
      />
      <button type="submit">Registrieren</button>
    </Form>
  );
};

export default Register;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
