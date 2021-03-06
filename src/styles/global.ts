import { darken } from "polished";
import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #E52D4D;
    --green: #33CC95; 
    --blue: #1b1b1b;
    
    --blue-light: #1f1f1f;
    
    --text-title: #363F5F;
    --text-body: #969CB3;
    
    --background: #EEEEEE;
    --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }

  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, input {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background-color: rgba(0,0,0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .react-modal-content {
    width: 100%;
    max-width: 576px;
    position: relative;
    border-radius: 0.25rem;
    padding: 3rem;
    background-color: var(--background);
  }

/* width */
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--green);
  transition: 200ms ease-in-out;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background:  #44DD95;
}

`

