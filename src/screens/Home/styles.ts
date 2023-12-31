import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
