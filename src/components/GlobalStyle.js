import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Raleway", sans-serif;
        list-style: none;
        text-decoration: none;
    }
    body{
        background: #FAFAFA;
        overflow-x: hidden;
    }
`;
export default GlobalStyle;
