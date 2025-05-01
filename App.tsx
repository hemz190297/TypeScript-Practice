import React, {use, useReducer, useRef, useState} from 'react';
import {View, StyleSheet, TextInput, FlatList, Text} from 'react-native';
import AppNavigator from './AppNavigator';
import {Provider} from 'react-redux';
import {store} from './redux/reduxWithts/store';

interface stateProps {
  name: string;
  email: string;
}
interface arrayProps {
  name: string;
  email: string;
}

const App = () => {
  const [counter, setCounter] = useState<Number>(0);
  const [item, setItem] = useState<String>('');
  // const [state, setState] = useState<stateProps>({name: '', email: ''});
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [array, setArray] = useState<arrayProps[]>([]);
  const [isError, setIsError] = useState<null>(null);

  const ref = useRef<TextInput>(null);
  const ref1 = useRef<FlatList>(null);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TextInput ref={ref} />
        <AppNavigator />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
