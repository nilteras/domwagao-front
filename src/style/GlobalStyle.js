import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        background: linear-gradient(to right, #000, #999);
        color: white; 
    }

`


export default GlobalStyle