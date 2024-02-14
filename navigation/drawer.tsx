import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LogoScreen from '../views/Logo';
import LoginScreen from '../views/Login';
import OTPScreen from '../views/OTP';
import SmartProfileScreen from '../views/SmartProfile';
import StarbucksScreen from '../views/Starbucks';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Logo">
        <Drawer.Screen name="Logo" component={LogoScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="OTP" component={OTPScreen} />
        <Drawer.Screen name="SmartProfile" component={SmartProfileScreen} />
        <Drawer.Screen name="Starbucks" component={StarbucksScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;

