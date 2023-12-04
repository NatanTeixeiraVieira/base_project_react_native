import light from '../styles/theme/light';

type ThemeType = typeof light;

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}
