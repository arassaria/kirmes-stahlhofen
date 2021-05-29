import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
    body {
        background-image: linear-gradient(white, grey);
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        overflow: hidden;
        height: 100vw;
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
