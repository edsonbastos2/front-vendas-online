import { Typography } from 'antd';
import styled from 'styled-components';

const { Title, Text } = Typography;

export const BackgroundImage = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`;

export const Paragraph = styled(Text)`
  width: 223px;
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: #656565;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TitleLogin = styled(Title)``;

export const LinkLogin = styled.a`
  color: #fb9400;
  font-size: 1rem;
  line-height: 19px;
  font-family: sans-serif;
  text-decoration: none;
`;

export const SpanLogin = styled(LinkLogin)`
  color: #1b1b1b;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
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
`;
