import { BackgroundImage, Container, LeftSide, RigthSide } from '../styles/LoginScreen.style';

export const LoginScreen = () => {
  return (
    <>
      <Container>
        <LeftSide>
          <BackgroundImage src="./bg-image.svg" />
        </LeftSide>
        <RigthSide>
          <Container>
            <input type="text" />
          </Container>
        </RigthSide>
      </Container>
    </>
  );
};
