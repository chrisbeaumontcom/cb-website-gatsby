import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  
body {
  font-family: Quicksand, Arial, Helvetica, sans-serif;
}

p.cv {
  color: #333333;
  font-size: 0.8rem;
}
ul.cv li {
  list-style-type: none;
  color: #333333;
  font-size: 0.8rem;
}
.form-group-address {
  display: none;
}

`
export default GlobalStyles
