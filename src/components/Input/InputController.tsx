import { ReactElement, cloneElement } from 'react';

import { Controller, UseControllerProps } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { LoginDatas } from '../../screens/Login';

type InputControllerProps = UseControllerProps<LoginDatas> & {
  input: ReactElement<TextInputProps>;
};

export default function InputController({
  input,
  ...props
}: InputControllerProps) {
  return (
    <Controller
      {...props}
      render={({ field }) =>
        cloneElement(input, {
          ...input.props,
          value: field.value,
          onChangeText: field.onChange,
          onBlur: field.onBlur,
        })
      }
    />
  );
}
