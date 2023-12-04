import { TextProps } from 'react-native';
import { InputLabelContainer } from './styles';

export default function InputLabel({ children, ...props }: TextProps) {
  return <InputLabelContainer {...props}>{children}</InputLabelContainer>;
}
