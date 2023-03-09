import { BackgroundImage, Container, Login } from '../styles/LoginScreen.style';

export const LoginScreen = () => {
  return (
    <>
      <Container>
        <Login>
          <BackgroundImage src="./bg-image.svg" />
        </Login>
        <Login>
          <input type="text" />
        </Login>
      </Container>
    </>
  );
};
