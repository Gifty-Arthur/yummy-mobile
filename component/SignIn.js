import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
 import { auth } from '../firebase';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Login Successful');
      navigation.navigate('Home'); // Adjust to your home screen
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome{'\n'} Back!</Text>

      <View style={styles.inputWrapper}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </View>

      <Text
        style={{
          color: '#F83758',
          alignSelf: 'flex-end',
          textAlign: 'right',
          fontSize: 12,
        }}
      >
        Forgotten Password?
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

// Styles remain the same
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 30,
    color: '#000',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#A8A8A9',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 40,
    fontSize: 16,
    paddingLeft: 30,
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: '#F83758',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
    marginTop: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 20,
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  linkText: {
    color: '#F83758',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row', // Align items in a row
  },
  inputIcon: {
    marginTop: 55,
    position: 'absolute',
    paddingLeft: 10,
  },
  iconPass: {
    flexDirection: 'row',
  },
  googleButton: {
    height: 50,
    width: 50,
    borderRadius: 25, // Fully rounded
    borderWidth: 2,
    borderColor: '#F83758',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    alignSelf: 'center', // Align the button at the center of the screen
    marginTop: 20, // Add space above the button
    marginHorizontal: 8
  },
  rowContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,



  }
});