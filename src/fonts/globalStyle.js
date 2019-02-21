import { createGlobalStyle } from 'styled-components'
import * as fonts from '../fonts'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'nulshockextralight';
    src: url('${fonts.NulshockExtraLightWOFF2}') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    font-family: 'Roboto Slab';
    text-rendering: optimizeLegibility;
    -ms-overflow-style: scrollbar;
    font-size: 18px;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Slab';
    font-size: 1em;
    color: #000000;
  }
  heroTitle {
      font-family: 'nulshockextralight';
      color: #fff;
      font-size: 5em;
      text-transform: uppercase;
      text-shadow: 5px 10px 10px rgba(0, 0, 0, 0.75),
        -3px 10px 12px rgba(0, 0, 0, 0.75);
      margin: 0 auto;
      text-align: left;
      -webkit-font-smoothing: antialiased;              
  }
  heroLabel {
      font-family: 'sans-serif';
      font-size: 1.2em;
      color: #fff;
      text-transform: uppercase;
      margin: 40px auto 0 10px;
      text-align: left;
      text-shadow: 5px 10px 10px rgba(0, 0, 0, 0.75),
        -3px 10px 12px rgba(0, 0, 0, 0.75);
      -webkit-font-smoothing: antialiased;
  }
`

export default GlobalStyle
