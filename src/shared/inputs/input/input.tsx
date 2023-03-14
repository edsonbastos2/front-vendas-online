import { Input, InputProps } from 'antd';

import { BoxInput } from './input.styles';

interface Props extends InputProps {
  placeholder?: string;
  sizeType?: 'large' | 'small';
}

export const InputDefault = ({ placeholder, sizeType, ...props }: Props) => {
  return (
    <BoxInput>
      <Input size={sizeType} placeholder={placeholder} {...props} />
    </BoxInput>
  );
};
