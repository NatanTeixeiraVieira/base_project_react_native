import { Container, Title } from './styles';
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import { TouchableOpacity, Text } from 'react-native';

export default function Home() {
  const handlePosition = async () => {
    const { granted } = await requestForegroundPermissionsAsync();
    if (granted) {
      const {
        coords: { latitude, longitude },
      } = await getCurrentPositionAsync();
      console.log(latitude, longitude);
    }
  };

  return (
    <Container>
      <Title>Home</Title>
      <TouchableOpacity onPress={handlePosition}>
        <Text>Clique aqui</Text>
      </TouchableOpacity>
    </Container>
  );
}
