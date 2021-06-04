import GlobalStyle from "./GlobalStyles";
import styled from "styled-components/macro";
import LogoMitText from "./assets/Logo_mit_Text.png";
import Facebook from "./assets/facebook.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Programm from "./pages/Programm";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Livestream from "./pages/Livestream";
import Admin from "./pages/Admin";
import DJ from "./pages/DJ";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import Logout from "./pages/Logout";
import { getUserRights } from "./utils/api";

const App = () => {
  const [token, setToken] = useState();
  const [rank, setRank] = useState();

  useEffect(() => {
    const doFetch = async () => {
      setToken(localStorage.getItem("token"));
      if (localStorage.getItem("token")) {
        const rank = await getUserRights({
          token: localStorage.getItem("token"),
        });
        setRank(rank);
      }
    };
    doFetch();
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Header>
        <HeaderGroupA>
          <LogoContainer href="/">
            <Logo src={LogoMitText} alt="Logo" />
            <h1>Kirmes Stahlhofen</h1>
          </LogoContainer>
        </HeaderGroupA>
        <a href="https://www.facebook.com/og.stahlhofen">
          <Logo src={Facebook} alt="zu unserer Facebook-Seite" />
        </a>
      </Header>
      <Nav>
        <Link to="/">Livestream</Link>
        <Link to="/programm">Programm</Link>
        <Link to="/sponsors">Sponsoren</Link>
        <Link to="/contact">Kontakt</Link>
        {token && rank === "2" && <Link to="/admin">Admin</Link>}
        {token && rank === "1" && <Link to="/dj">DJ</Link>}
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
        <a href="https://www.og-stahlhofen.de/impressum">Impressum</a>
        <p>Kirmes Stahlhofen 2021</p>
        <a href="https://www.og-stahlhofen.de/datenschutzerklaerung">
          Datenschutz
        </a>
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
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Logo = styled.img`
  height: 100px;
  padding-right: 5px;
`;

const LogoContainer = styled.a`
  border: 0;
  background: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: black;
  :hover {
    text-decoration: none;
  }
`;
