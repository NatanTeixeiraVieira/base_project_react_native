import { ForwardedRef } from 'react';
import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled.View``;

export const InputLabelContainer = styled.Text``;

export const InputFullContainer = styled.View<{ hasError?: boolean }>`
  ${({ theme, hasError }) => css`
    border: 1px solid #000;
  `}
`;

export const InputFieldContainer = styled.TextInput<{
  ref: ForwardedRef<TextInput>;
}>`
  ${({ theme }) => css``}
`;

export const HelperText = styled.Text`
  ${({ theme }) => css``}
`;
