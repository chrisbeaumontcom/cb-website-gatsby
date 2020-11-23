import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  
body {
  font-family: Quicksand, Arial, Helvetica, sans-serif;
}
h2 {
  padding: 20px 0;
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
