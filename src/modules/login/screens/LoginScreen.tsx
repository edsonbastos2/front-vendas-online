import { ButtonCad, ButtonLogin } from '../../../shared/buttons/button/button';
import { InputDefault } from '../../../shared/inputs/input/input';
import {
  BackgroundImage,
  Container,
  Content,
  LeftSide,
  LinkLogin,
  Paragraph,
  RigthSide,
  SpanLogin,
  TextInfo,
  TitleLogin,
} from '../styles/LoginScreen.style';

export const LoginScreen = () => {
  const handleButton = () => {
    console.log('teste');
  };
  const handleButton2 = () => {
    console.log('teste2');
  };

  return (
    <>
      <Container>
        <LeftSide>
          <BackgroundImage src="./bg-image.svg" />
        </LeftSide>
        <RigthSide>
          <Content>
            <TextInfo>
              <TitleLogin>Ifome</TitleLogin>
              <Paragraph>Use suas credenciais para realizar o login.</Paragraph>
            </TextInfo>
            <InputDefault placeholder="Digite seu e-mail" sizeType="large" />
            <InputDefault type="password" placeholder="Digite sua senha" sizeType="large" />
            <ButtonLogin text="Entrar" margin="32px 0" handleClick={handleButton} />
            <SpanLogin>
              Esqueceu sua senha?
              <LinkLogin href="#" target="_blank">
                clique aqui
              </LinkLogin>
            </SpanLogin>
            <ButtonCad text="Quero me cadastrar" margin="32px 0 0" handleClick={handleButton2} />
          </Content>
        </RigthSide>
      </Container>
    </>
  );
};
