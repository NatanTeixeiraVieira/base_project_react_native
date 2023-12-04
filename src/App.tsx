import 'react-native-gesture-handler';
import Routes from './routes';
import { ThemeProvider } from 'styled-components/native';
import light from './styles/theme/light';

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <Routes />
    </ThemeProvider>
  );
}
