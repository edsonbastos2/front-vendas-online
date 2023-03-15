import { ChangeEvent, useState } from 'react';

import { ButtonDefault } from '../../../shared/buttons/button/button';
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
    console.log('email: ' + email);
    console.log('senha: ' + password);
  };
  const handleButton2 = () => {
    console.log('teste2');
  };

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
            <InputDefault
              placeholder="Digite seu e-mail"
              sizeType="large"
              value={email}
              onChange={handleEmail}
            />
            <InputDefault
              type="password"
              placeholder="Digite sua senha"
              sizeType="large"
              value={password}
              onChange={handlePassword}
            />
            <ButtonDefault
              text="Entrar"
              margin="32px 0"
              handleClick={handleButton}
              primary
              color
              border
            />
            <SpanLogin>
              Esqueceu sua senha?
              <LinkLogin href="#" target="_blank">
                clique aqui
              </LinkLogin>
            </SpanLogin>
            <ButtonDefault
              border
              text="Quero me cadastrar"
              margin="32px 0 0"
              handleClick={handleButton2}
            />
          </Content>
        </RigthSide>
      </Container>
    </>
  );
};
