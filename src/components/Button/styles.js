import styled from 'styled-components';

export const Container = styled.button`
  background: ${(props) => (props.graySchema ? '#868e96' : '#ff577f')};

  color: var(--gray-0);
  height: 45px;
  border-radius: 5px;
  border: 0;
  font-family: 'Inter';
  margin-top: 16px;
  width: 100%;

  :hover {
    background: ${(props) => (props.graySchema ? '#343b41' : '#ff427f')};
  }

  :disabled {
    background: var(--color-primary-negative);
  }
`;
