import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Register() {
  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate('login');
  };
  return (
    <View>
      <Text>Register</Text>
      <Button title="Login" onPress={handleRegister} />
    </View>
  );
}
