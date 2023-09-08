import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button, textarea {
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    background-color: #333;
    color: #fff;

    a {
      text-decoration: none;
      color: inherit;
    }

    button {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      transition: filter 200ms;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;