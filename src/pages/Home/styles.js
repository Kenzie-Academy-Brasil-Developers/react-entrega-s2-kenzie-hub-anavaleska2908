import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 400px;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  div {
    flex: 1;
    display: flex;
    margin-top: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;

    button + button {
      margin-left: 1rem;
    }

    @media (min-width: 1120px) {
      margin: 0;
    }
  }

  span {
    margin-bottom: 2rem;
    font-size: 1.8rem;
    flex-wrap: wrap;
  }
`;
