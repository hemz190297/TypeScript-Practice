import {RootStackParamList} from '../AppNavigator';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';

interface MyProps {
  navigation: StackNavigationProp<RootStackParamList, 'SignUpScreen'>;
}

const SignUpScreen = ({navigation}: MyProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [badName, setBadName] = useState(false);

  const validation = () => {
    let isValid = true;
    if (name === '') {
      setBadName(true);
    } else {
      setBadName(false);
    }
    if (email === '') {
      setBadEmail(true);
    } else {
      setBadEmail(false);
    }
    if (password === '') {
      setBadPassword(true);
    } else {
      setBadPassword(false);
    }
    if (email !== '' && password !== '' && name !== '') {
      isValid = true;
    } else {
      isValid = false;
    }
    return isValid;
  };

  const signUp = async () => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const body = {email: email, password: password, name: name};
    const res = await fetch(
      'https://cartreuse-green-bear-yoke.cyclic.app/api/auth/register',
      {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body),
      },
    );
    const data = await res.json();
    console.log('shree:::::', data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Create New Account</Text>
      <View style={styles.centeredView}>
        <TextInput
          placeholder="Name"
          value={name}
          style={styles.inputStyle}
          onChangeText={(val: string) => {
            setName(val);
          }}
        />
        {badName ? (
          <Text style={{color: 'red', marginTop: 5}}>
            Please enter a valid name
          </Text>
        ) : (
          ''
        )}
        <TextInput
          placeholder="Email"
          value={email}
          style={styles.inputStyle}
          onChangeText={(val: string) => {
            setEmail(val);
          }}
        />
        <Text style={{color: 'red', marginTop: 5}}>
          {badEmail ? 'Please enter a valid email' : ''}
        </Text>
        <TextInput
          value={password}
          placeholder="Password"
          style={styles.passwordInputStyle}
          onChangeText={val => {
            setPassword(val);
          }}
        />
        <Text style={{color: 'red', marginTop: 5}}>
          {badPassword ? 'Please enter a valid password' : ''}
        </Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            if (validation()) {
              signUp();
              console.log('SignUp successful::::::');
            }
          }}>
          <Text style={styles.loginText}>SignUp</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.createButton}
          onPress={() => navigation.navigate('FlatlistTypeScript')}>
          <Text style={styles.createText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  inputStyle: {
    borderColor: '#000',
    borderWidth: 1,
    width: '90%',
    marginTop: 20,
  },
  passwordInputStyle: {
    borderColor: '#000',
    borderWidth: 1,
    width: '90%',
    marginTop: 20,
  },
  loginButton: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
  },
  createButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
    borderWidth: 1,
  },
  loginText: {
    color: '#fff',
  },
  createText: {
    color: '#000',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 20,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SignUpScreen;
