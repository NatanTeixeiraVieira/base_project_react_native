import { forwardRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { InputFieldContainer } from './styles';

export default forwardRef<TextInput, TextInputProps>(function InputField(
  props,
  ref,
) {
  return <InputFieldContainer ref={ref} {...props} />;
});
