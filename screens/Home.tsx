import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useReducer} from 'react';
import {RootStackParamList} from '../AppNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {StyleProvider} from './StyleContext';
import Comp from './Comp';

interface HomeProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

type MyState = {
  count: number;
};

type MyAction = {
  type: 'increment' | 'decrement' | 'reset';
};

const initialState: MyState = {
  count: 0,
};

const reducer = (state: MyState, action: MyAction): MyState => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return {count: 0};
    default:
      return state;
  }
};
const Home = ({navigation}: HomeProps) => {
  const [reducerState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log('Home screen mounted');
    return () => {
      console.log('Home screen unmounted');
    };
  }, []);
  return (
    <StyleProvider>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Settings', {
              name: 'Hemant',
              email: 'hemant@gmail.com',
            });
            console.log('Navigating to Settings');
          }}
          style={styles.button}>
          <Text style={styles.text}>Go to Settings</Text>
        </TouchableOpacity>
        <Text style={styles.text1}>{reducerState.count}</Text>

        <TouchableOpacity
          onPress={() => {
            dispatch({type: 'increment'});
            console.log('Navigating to reducer:::::', reducerState.count);
          }}
          style={styles.button}>
          <Text style={styles.text}>increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            dispatch({type: 'decrement'});
            console.log('Navigating to reducer:::::', reducerState.count);
          }}
          style={styles.button}>
          <Text style={styles.text}>decrement</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            dispatch({type: 'reset'});
            console.log('Navigating to reset:::::', reducerState.count);
          }}
          style={styles.button}>
          <Text style={styles.text}>reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Notes');
          }}
          style={styles.button}>
          <Text style={styles.text}>Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SplashScreen');
          }}
          style={styles.button}>
          <Text style={styles.text}>SplashScreen</Text>
        </TouchableOpacity>
        <Comp />
      </View>
    </StyleProvider>
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

export default Home;
