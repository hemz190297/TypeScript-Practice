import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../AppNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {useRoute} from '@react-navigation/native';

interface SettingsProps {
  navigation: StackNavigationProp<RootStackParamList, 'Settings'>;
}

const Settings = ({navigation}: SettingsProps) => {
  const route = useRoute();
  console.log('Route params::::::', route);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Products');
        }}
        style={styles.button}>
        <Text style={styles.text}>Go to Products</Text>
      </TouchableOpacity>
      <Text>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  text: {
    color: 'white',
    fontWeight: '500',
    fontStyle: 'italic',
  },
  text1: {
    color: 'black',
    fontWeight: '500',
    fontStyle: 'italic',
  },
});

export default Settings;
