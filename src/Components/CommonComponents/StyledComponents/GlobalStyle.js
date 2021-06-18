import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }

 html {
  font-size: 80%;
  font-family: 'Lato', sans-serif;
  box-sizing: border-box;
 }

 body {
 
 }
`

export default GlobalStyle;