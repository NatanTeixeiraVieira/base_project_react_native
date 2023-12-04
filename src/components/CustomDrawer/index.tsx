// Importando os módulos necessários do React Native
import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

// Componente para o conteúdo personalizado do Drawer
export default function CustomDrawer(props: DrawerContentComponentProps) {
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.navigate('login');
  };

  return (
    <DrawerContentScrollView {...props}>
      <View>
        {/* Área de cabeçalho personalizada (opcional) */}
        <View style={{ padding: 16, backgroundColor: '#f0f0f0' }}>
          <Text>Meu Aplicativo</Text>
        </View>

        {/* Itens de navegação padrão gerados automaticamente */}
        <DrawerItemList {...props} />

        {/* Item de navegação personalizado (opcional) */}
        <TouchableOpacity
          onPress={() => {
            // Lógica para lidar com a ação do item personalizado
            console.log('Item Personalizado Pressionado');
          }}
          style={{
            padding: 16,
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
          }}
        ></TouchableOpacity>
        <Button title="Sair" onPress={handleLogout} />
      </View>
    </DrawerContentScrollView>
  );
}
