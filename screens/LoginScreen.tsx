import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../AppNavigator';
import {StyleSheet} from 'react-native';
import CommonTextInput from '../components/CommonTextInput';
import {useAuth} from './context/AuthProvider';

interface MyProps {
  navigation: StackNavigationProp<RootStackParamList, 'LoginScreen'>;
}

const LoginScreen = ({navigation}: MyProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);

  const {login} = useAuth();

  const validation = () => {
    let isValid = true;
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
    if (email !== '' && password !== '') {
      isValid = true;
    } else {
      isValid = false;
    }
    return isValid;
  };

  const loginScreen = async () => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const body = {email: email, password: password};
    const res = await fetch('http://localhost:8000/api/auth/login', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.log('Response:::::', data);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome Back</Text>
      <View style={styles.centeredView}>
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
        {badPassword ? (
          <Text style={{color: 'red', marginTop: 5}}>
            Please enter a valid password
          </Text>
        ) : (
          ''
        )}
        <CommonTextInput
          placeholder="Enter password"
          value={password}
          onChangeText={setPassword}
          keyboardType="number-pad"
          secureTextEntry
          maxLength={10}
          disabled={false}
          isError={badPassword}
        />

        <Text style={{color: 'red', marginTop: 5}}>
          {badPassword ? 'Please enter a valid password2' : ''}
        </Text>
        <TouchableOpacity
          style={styles.loginButton}
          // onPress={() => {
          //   if (validation()) {
          //     loginScreen();
          //     console.log('Login successful::::::');
          //   }
          // }}>
          onPress={() => {
            login(email, password);
            navigation.navigate('HomeScreen');
          }}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.createButton}
          onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.createText}>Create Account</Text>
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

export default LoginScreen;
