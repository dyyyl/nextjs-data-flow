import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  &:root {
    /* Colors */
    --primary: #252525;
    --secondary: #454545;
    --brand: #FF4136;
    --brand-secondary: #FF6026;

    /* Fonts */
    --sans: Arial, apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0;
    font-family: var(--sans);
  }

  a {
    color: inherit,
  }
`;

export default GlobalStyle;
