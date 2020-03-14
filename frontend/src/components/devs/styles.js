import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.main`
  display: grid;
  flex: 1;
  padding: 1rem;

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    list-style: none;
  }

  @media (max-width: 1500px) {
    ul {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 1250px) {
    ul {
      grid-template-columns: 1fr;
    }
  }
`;

export const DevItem = styled.li`
  background-color: #fff;
  padding: 2rem;
  border-radius: 4px;
  width: 100%;
  height: 230px;
  border-bottom: 2px solid ${darken(0.1, '#e5e6ef')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a {
    color: #7d40e7;
    text-decoration: none;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;
export const DevInfo = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;

  img {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    margin-right: 1.5rem;
  }
`;
export const Bio = styled.p`
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`;

export const Techs = styled.p`
  color: #999;
  text-transform: capitalize;
`;
