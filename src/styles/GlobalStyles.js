import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Quicksand, Arial, Helvetica, sans-serif;
  }
  h2 {
    padding: 20px 0;
  }
  .form-group-address {
    display: none;
  }
`;

export default GlobalStyles;
