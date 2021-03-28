import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }
 :root {
  // Primary colors
  --orange: #F95E3F;
  --orange-ligth: #FF7457;
  --orange-dark: #E64F30;

  // Secundary colors
  --purple: #A950C4;
  --purple-ligth: #BB71D2;
  --purple-dark: #9142A8;

  // White colors
  --white: #F3F0F5;
  --white-ligth: #FBF8FC;
  --white-dark: #EDEAEF;

   // black colors
  --black: #353436;
  --black-ligth: #4D4C4E;
  --black-dark: #232224;

   // Auxiliary colors
  --red: #EB3D3D;
  --red-ligth: #F05454;
  --red-dark: #D03333;

  --green: #32D957;
  --green-ligth: #50E170;
  --green-dark: #28BB49;

  --yellow: #FFCE52;
  --yellow-ligth: #FFD76B;
  --yellow-dark: #D9B043;

   // Grey colors
  --gray-1: #454446;
  --gray-2: #555456;
  --gray-3: #666566;
  --gray-4: #767576;
  --gray-5: #868587;
  --gray-6: #969597;
  --gray-7: #A6A6A7;
 }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Mukta' sans-serif;
    font-style: normal;
    font-weight: normal;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  
  button {
    cursor: pointer;
  }

`;
