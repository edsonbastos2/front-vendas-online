import { InputDefault } from '../../../shared/inputs/input/input';
import {
  BackgroundImage,
  Container,
  Content,
  LeftSide,
  RigthSide,
} from '../styles/LoginScreen.style';

export const LoginScreen = () => {
  return (
    <>
      <Container>
        <LeftSide>
          <BackgroundImage src="./bg-image.svg" />
        </LeftSide>
        <RigthSide>
          <Content>
            <InputDefault placeholder="Digite seu e-mail" sizeType="large" />
            <InputDefault placeholder="Digite sua senha" sizeType="large" />
          </Content>
        </RigthSide>
      </Container>
    </>
  );
};
