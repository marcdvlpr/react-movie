import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primaryColor: rgb(251, 197, 0);
    --secondaryColor: rgb(28, 28, 28);
    --white: rgb(255, 255, 255);
    --lightGrey: rgb(53, 53, 53);
  }

  * {
    font-family: 'Abel', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`;
