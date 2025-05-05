import {View, Text, Button} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../AppNavigator';
import {useAuth} from './context/AuthProvider';

interface MyProps {
  navigation: StackNavigationProp<RootStackParamList, 'HomeScreen'>;
}

const HomeScreen = ({navigation}: MyProps) => {
  const {user, logout} = useAuth();
  console.log('user:::::', user);

  return (
    <View>
      <Text>user:{user?.email}</Text>
      <Button
        onPress={() => {
          logout();
          navigation.navigate('LoginScreen');
        }}
        title={'logout'}
      />
    </View>
  );
};

export default HomeScreen;
