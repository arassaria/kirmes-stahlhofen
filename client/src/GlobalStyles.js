import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
    body {
        background-image: linear-gradient(white, grey);
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100vh;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: white;
    }
    a:hover {
        text-decoration: underline;
    }
`;

export default GlobalStyle;
