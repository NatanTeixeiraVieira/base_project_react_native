import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home/index.';
import Profile from '../screens/Profile';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="home"
        component={Home}
        options={{ drawerLabel: 'Início' }}
      />
      <Drawer.Screen name="profile" component={Profile} />
    </Drawer.Navigator>
  );
}
