import GlobalStyle from "./GlobalStyles";
import styled from "styled-components/macro";
import LogoMitText from "./assets/Logo_mit_Text.png";
import Facebook from "./assets/streamdeck_key.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Programm from "./pages/Programm";
import Sponsors from "./pages/Sponsors";
import Impressum from "./pages/Impressum";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Livestream from "./pages/Livestream";
import Admin from "./pages/Admin";
import DJ from "./pages/DJ";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import Logout from "./pages/Logout";

const App = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    const doFetch = () => {
      setToken(localStorage.getItem("token"));
    };
    doFetch();
  }, []);

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
        <Link to="/">Livestream</Link>
        <Link to="/programm">Programm</Link>
        <Link to="/sponsors">Sponsoren</Link>
        <Link to="/impressum">Impressum</Link>
        <Link to="/contact">Kontakt</Link>
        {!token && <Link to="/login">Login</Link>}
        {token && <Link to="/logout">Logout</Link>}
      </Nav>
      <Switch>
        <Route path="/programm">
          <Programm />
        </Route>
        <Route path="/sponsors">
          <Sponsors />
        </Route>
        <Route path="/impressum">
          <Impressum />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/staff/register">
          <Register />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/dj">
          <DJ />
        </Route>
        <Route path="/">
          <Livestream />
        </Route>
      </Switch>
      <Footer>
        <p>Kirmes Stahlhofen 2021</p>
      </Footer>
    </Router>
  );
};

export default App;

const Nav = styled.div`
  background-color: grey;
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0;
`;

const Header = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-between;
  max-width: 100vw;
  @media screen and (min-width: 900px) {
    margin: 0 20%;
    > :last-child {
      margin-right: 0;
    }
  }
  @media screen and (max-width: 900px) {
    margin: 0;
    > :last-child {
      margin-right: 10px;
    }
  }
`;

const HeaderGroupA = styled.div`
  display: flex;
  height: inherit;
  width: 100%;
  @media screen and (min-width: 900px) {
    > :first-child {
      margin: 0 10px 0 0;
    }
  }
  @media screen and (max-width: 900px) {
    > :first-child {
      margin: 0 10px;
    }
  }
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
