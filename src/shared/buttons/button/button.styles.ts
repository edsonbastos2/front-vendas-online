import styled from 'styled-components';

type BottonProps = {
  primary?: string;
  color?: string;
  border?: string;
};

export const ButtonAntd = styled.button<BottonProps>`
  width: 100%;
  height: 61px;
  font-size: 1rem;
  font-weight: 600;
  background-color: ${(props) => (props.primary ? '#fb9400' : '#fff')};
  color: ${(props) => (props.color ? '#fff' : '#fb9400')};
  border: ${(props) => (props.border ? '1px solid #fb9400' : 'none')};
  border-radius: 4px;
  outline: none;
`;
