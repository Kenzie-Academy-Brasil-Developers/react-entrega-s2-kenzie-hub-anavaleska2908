import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;

export const Nav = styled.nav`
  display: flex;
  height: 3.5rem;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: 1.5rem;
  margin-bottom: 1rem;

  button {
    width: 100px;
    height: 30px;
    margin: 0;
    background-color: var(--gray-2);
  }

  h1 {
    font-size: 1.5rem;
  }
`;

export const Content = styled.main`
  background: var(--gray-3);
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100vh;
  max-width: 350px;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 5px;
  margin-bottom: 20px;

  form {
    width: 300px;
    text-align: center;

    h2 {
      font-size: 1.2rem;
      margin-top: 10px;
    }

    > div {
      margin-top: 14px;
    }

    p {
      font-size: 0.8rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    button {
      margin-bottom: 15px;
    }
  }
`;
