import styled from 'styled-components';

export const Container = styled.div`
  background: var(--gray-4);
  width: 100%;
  height: 60px;
  max-width: 310px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  border-radius: 5px;

  h3 {
    margin-left: 10px;
  }

  p {
    margin-right: 10px;
    color: var(--gray-1);
  }
`;
