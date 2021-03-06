import styled from "styled-components";
import { darken, transparentize } from 'polished'

export const Container = styled.form`
  h2{
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    font-size: 1rem;
    border-radius: .25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    &::placeholder {
      color: var(--text-body);
      font-size: 1rem;
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    margin-top: 1rem;
    background: var(--green);
    padding: 0 1.5rem;
    height: 4rem;
    transition: filter 0.2s;
    border-radius: .25rem;
    border: 0;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;


export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .5rem;
`

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'red' | 'green';
}

const colors = {
  green: '#33CC95',
  red: '#E52D4D',
}

export const RadioBox = styled.button<RadioBoxProps>`
   height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    
    background-color: ${props => props.isActive ? transparentize(0.9, colors[props.activeColor]) : 'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }
    p {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-right: 1rem;
      font-size: 1rem;
      color: var(--text-title);
    }
`