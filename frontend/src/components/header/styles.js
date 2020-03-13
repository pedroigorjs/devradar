import styled from 'styled-components';

export const Container = styled.section`
  display: flex;

  header {
    background-color: #fff;
    width: 100%;
    padding: 1rem;
    border-bottom: 1px solid #dedede;

    nav {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        max-width: 200px;
        align-self: center;
      }
    }
  }
`;
