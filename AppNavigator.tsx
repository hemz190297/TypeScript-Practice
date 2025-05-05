import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Settings from './screens/Settings';
import Products from './screens/productList/Products';
import Notes from './screens/notes/Notes';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';
import SignUpScreen from './screens/SignUpScreen';
import FlatlistTypeScript from './screens/FlatlistTypeScript';
import AuthProvider from './screens/context/AuthProvider';

export type RootStackParamList = {
  Home: undefined;
  Settings: {name: string; email: string};
  Products: [];
  Notes: undefined;
  SignUpScreen: undefined;
  LoginScreen: undefined;
  SplashScreen: undefined;
  HomeScreen: undefined;
  FlatlistTypeScript: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{title: ''}}
          />
          <Stack.Screen name="Home" component={Home} />

          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="Notes" component={Notes} />
          <Stack.Screen
            name="FlatlistTypeScript"
            component={FlatlistTypeScript}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default AppNavigator;
