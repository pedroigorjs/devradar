import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.section`
  padding: 1rem;
`;

export const Aside = styled.aside`
  form {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 3rem;
    border-radius: 4px;
    width: 100%;
    border-bottom: 2px solid ${darken(0.1, '#e5e6ef')};

    h1 {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 1.5rem;
    }
  }
`;

export const Input = styled.input`
  padding: 1rem;
  border-radius: 4px;
  background-color: hsla(0, 0%, 99%, 1);
  border: none;
  border-bottom: 2px solid #eee;

  &::placeholder {
    color: #999;
  }

  margin-bottom: 1rem;
`;

export const Button = styled.button`
  margin-top: 1.5rem;
  padding: 1rem;
  font-weight: 700;
  border: none;
  background-color: #7d40e7;
  color: #fff;
  border-radius: 4px;
  text-transform: uppercase;
  border-bottom: 2px solid ${darken(0.2, '#7D40E7')};

  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: ${darken(0.1, '#7D40E7')};
  }
`;

export const Coordinates = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  input {
    margin: 0;
    width: 95%;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const Label = styled.label`
  margin-bottom: 1rem;
  font-weight: 700;
  color: ${lighten(0.2, '#211F26')};
`;
