import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Open Sans, sans-serif;
  }

  nav {
    padding: 1rem;
    background: #eee;
  }

  a {
    text-decoration: none;
    margin: 0;
  }
    /* Reset common elements */
button,
input,
textarea {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background: none;
  border: none;
  padding: 0;
}
`;

export default GlobalStyle;
