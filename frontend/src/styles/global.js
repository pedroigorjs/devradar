import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #e5e6ef;
  }

  body,
  input,
  button {
    font: 1rem 'Roboto', sans-serif;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.004);
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    letter-spacing: 0.02em;
    color: #211F26;
  }
`;
