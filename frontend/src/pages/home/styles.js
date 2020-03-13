import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  max-width: 85%;
  margin: 0 auto;

  @media (max-width: 1100px) {
    flex-direction: column;
    max-width: 100%;
  }
`;
