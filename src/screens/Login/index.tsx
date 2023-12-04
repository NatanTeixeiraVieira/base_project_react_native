import { useRef } from 'react';

import {
  Button,
  Text,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TextInput } from 'react-native-gesture-handler';

const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const loginFormSchema = z.object({
  email: z
    .string()
    .nonempty('Não pode ser vazio')
    .email('Email inválido')
    .regex(regexEmail),
  password: z
    .string()
    .nonempty('Não pode ser vazio')
    .min(8, 'Precisar ter pelo menos 8 dígitos'),
});

export type LoginDatas = z.infer<typeof loginFormSchema>;

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors, dirtyFields, isSubmitting },
  } = useForm<LoginDatas>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { password: '' },
  });

  const navigation = useNavigation();

  const emailRef = useRef<TextInput>(null);

  const handleRegister = () => {
    navigation.navigate('register');
  };

  const handleLogin = async ({ email, password }: LoginDatas) => {
    const response = await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(email, password);
  };

  const handlePressLabel = () => {
    emailRef.current?.focus();
  };

  return (
    <View>
      <Text>Login</Text>
      <Button title="Cadastre-se" onPress={handleRegister} />

      <TouchableWithoutFeedback>
        <KeyboardAvoidingView>
          <Input.Root>
            <Input.Label onPress={handlePressLabel}>Email</Input.Label>
            <Input.Controller
              name="email"
              control={control}
              input={<Input.Field editable={!isSubmitting} ref={emailRef} />}
            />
            {errors.email && (
              <Input.HelperText>{errors.email.message}</Input.HelperText>
            )}
          </Input.Root>
          <Input.Root>
            <Input.Label>Senha</Input.Label>
            <Input.Controller
              name="password"
              control={control}
              input={<Input.Field editable={!isSubmitting} />}
            />
            {errors.password && (
              <Input.HelperText>{errors.password.message}</Input.HelperText>
            )}
          </Input.Root>
          <TouchableOpacity
            disabled={isSubmitting}
            onPress={handleSubmit(handleLogin)}
            style={{ backgroundColor: 'blue', alignItems: 'center' }}
          >
            <Text style={{ fontSize: 30, color: 'white' }}>
              {isSubmitting
                ? isSubmitting && (
                    <ActivityIndicator size="large" color="white" />
                  )
                : 'Login'}
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}
