import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './navigation/drawer';
import { StatusBar } from 'react-native';
import Logo from './views/Logo';
import OTP from './views/OTP';
import Login from './views/Login';
import SmartProfile from './views/SmartProfile';
import Starbucks from './views/Starbucks';

export default function App(){
  const Drawer = createDrawerNavigator();

  return (
    <>
    <StatusBar style="auto" />
    <NavigationContainer>
    <Drawer.Navigator>
        <Drawer.Screen name="Logo" component={Logo} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="OTP" component={OTP} />
        <Drawer.Screen name="SmartProfile" component={SmartProfile} />
        <Drawer.Screen name="Starbucks" component={Starbucks} />
    </Drawer.Navigator>
    </NavigationContainer>
    </>

  );
};

export default App;

