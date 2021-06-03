import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
    body {
        background-image: linear-gradient(white, grey);
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        min-height: 100vh;
        height: 100%;
        margin: 0;
        padding: 0 0 40px 0;
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
