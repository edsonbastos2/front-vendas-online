import styled from 'styled-components';

export const BackgroundImage = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  width: 100%;
  height: 100vh;
  padding: 16px;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const RigthSide = styled.div`
  width: 100%;
  height: 100vh;
  padding: 16px;
  background-color: red;
`;
