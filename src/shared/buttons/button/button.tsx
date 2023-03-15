import { ButtonAntd, ButtonAntdCad } from './button.styles';

interface Props {
  text: string;
  margin?: string;
  handleClick: () => void;
}

export const ButtonLogin = ({ margin, text, handleClick, ...props }: Props) => {
  return (
    <ButtonAntd style={{ margin }} {...props} onClick={handleClick}>
      {text}
    </ButtonAntd>
  );
};

export const ButtonCad = ({ margin, text, handleClick, ...props }: Props) => {
  return (
    <ButtonAntdCad style={{ margin }} {...props} onClick={handleClick}>
      {text}
    </ButtonAntdCad>
  );
};
