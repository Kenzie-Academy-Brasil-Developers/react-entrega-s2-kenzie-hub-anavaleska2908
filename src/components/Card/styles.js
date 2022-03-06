import styled from 'styled-components';

export const Container = styled.div`
  background: var(--gray-4);
  width: 100%;
  height: 60px;
  max-width: 310px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  border-radius: 5px;
  margin-left: 10px;

  :hover {
    background: var(--gray-1);
  }

  h3 {
    margin-left: 10px;
  }

  p {
    margin-right: 10px;
    color: var(--gray-0);
  }

  @media (min-width: 1025px) {
    width: 60vw;
    max-width: 1200px;
  }
`;

export const DivModal = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 20em;
  align-self: flex-start;
`;
