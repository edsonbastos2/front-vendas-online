import { ButtonAntd } from './button.styles';

interface Props {
  text: string;
  margin?: string;
  handleClick: () => void;
}

export const ButtonDefault = ({ margin, text, handleClick, ...props }: Props) => {
  return (
    <ButtonAntd style={{ margin }} {...props} onClick={handleClick}>
      {text}
    </ButtonAntd>
  );
};
