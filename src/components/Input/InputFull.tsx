import { ReactNode } from 'react';

import { InputFullContainer } from './styles';

type InputFullProps = {
  children?: ReactNode;
  hasError?: boolean;
};

export default function InputFull({ children, hasError }: InputFullProps) {
  return (
    <InputFullContainer hasError={hasError}>{children}</InputFullContainer>
  );
}
