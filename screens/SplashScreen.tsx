import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../AppNavigator';

interface MyProps {
  navigation: StackNavigationProp<RootStackParamList, 'SplashScreen'>;
}

const SplashScreen = ({navigation}: MyProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LoginScreen');
      console.log('Navigating to HomeScreen...');
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <Text style={{fontSize: 24, fontWeight: 'bold', color: '#fff'}}>
        Welcome to My Notes App
      </Text>
    </View>
  );
};

export default SplashScreen;
