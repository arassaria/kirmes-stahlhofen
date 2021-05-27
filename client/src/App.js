import GlobalStyle from "./GlobalStyles";
import styled from "styled-components/macro";
import LogoMitText from "./assets/Logo_mit_Text.png";
import Facebook from "./assets/streamdeck_key.png";
import Stream from "./components/Stream";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const handleOnClick = () => {
    alert("Hi");
  };

  return (
    <Router>
      <GlobalStyle />
      <Header>
        <HeaderGroupA>
          <Logo src={LogoMitText} alt="Logo" />
          <h1>Kirmes Stahlhofen</h1>
        </HeaderGroupA>
        <Logo src={Facebook} alt="Hier Facebook-Logo einfügen" />
      </Header>
      <Nav>
        <li>Programm</li>
        <li>Sponsoren</li>
        <li>Livestream</li>
        <li>Impressum</li>
        <li>Kontakt</li>
        <li>Login</li>
      </Nav>
      <Body>
        <Stream />
        <Form>
          <input type="text" />
          <input type="text" />
          <button onClick={handleOnClick}>Drück mich!</button>
        </Form>
        <Footer>
          <p>Kirmes Stahlhofen 2021</p>
        </Footer>
      </Body>
    </Router>
  );
};

export default App;

const Nav = styled.div`
  background-color: grey;
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
`;

const Header = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-between;
  max-width: 100vw;
`;

const HeaderGroupA = styled.div`
  display: flex;
  height: inherit;
  width: 100%;
`;

const Body = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
`;

const Form = styled.div`
  background-color: green;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.div`
  background-color: black;
  color: white;
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 100%;
`;

const Logo = styled.img`
  height: 100px;
`;
