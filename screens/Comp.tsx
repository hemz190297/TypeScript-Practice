import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {MyContext} from './StyleContext';

const Comp = () => {
  const value = useContext(MyContext);
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: value.bg, width: 100, height: 100}}>
        <Text style={[styles.text, {color: value.color}]}>Comp</Text>
      </View>
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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Comp;
