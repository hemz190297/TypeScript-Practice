import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Settings from './screens/Settings';
import Products from './screens/productList/Products';
import Notes from './screens/notes/Notes';

export type RootStackParamList = {
  Home: undefined;
  Settings: {name: string; email: string};
  Products: [];
  Notes: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Notes" component={Notes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
