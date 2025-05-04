import {View, Text} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../AppNavigator';

interface MyProps {
  navigation: StackNavigationProp<RootStackParamList, 'HomeScreen'>;
}

const HomeScreen = ({navigation}: MyProps) => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
