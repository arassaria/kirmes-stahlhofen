import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
    body {
        background-image: linear-gradient(white, grey);
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        overflow-x: hidden;
        height: 100vh;
    }
`;

export default GlobalStyle;
